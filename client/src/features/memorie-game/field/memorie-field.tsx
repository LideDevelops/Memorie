import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useAppDispatch, useAppSelector } from '../../state-management/hooks';
import { RootState } from '../../state-management/store';
import {useMemorieCards  } from '../api/memorie-api';
import MemorieCard from '../card/memorie-card';
import {  MemorieCardModel } from '../models/memorie.dto';
import { startNextRound } from '../slices/memorie-card-slice';

const useStyles = createUseStyles({
    memoriefield: {
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        flexWrap: "wrap",
        gap: "10px 30px",
        width: '100%',
        height: '100%'
    }
  });


type MemorieFieldProps = {
    id: string;
}
const amountOfSameCardsOnTable = 2;


const MemorieField = (props: MemorieFieldProps) => {
    const [memorieId, setMemorieId] = useState<number>(1);
    const [douplicatedAndRandomizedCardArray, setdouplicatedAndRandomizedCardArray] = useState<MemorieCardModel[] | null>(null);
    const loadedCards = useMemorieCards(memorieId);
    const classes = useStyles();
    const canCardBeFlipped = useAppSelector(state => state.memorieCards.cardsLeftToFlip > 0)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(!canCardBeFlipped) {
            setTimeout(() => dispatch(startNextRound()), 1000);
        }
    })
    useEffect(() => {
        if(loadedCards == null) {
            return;
        }
        setdouplicatedAndRandomizedCardArray(loadedCards
        .flatMap<MemorieCardModel>(card => Array.from<MemorieCardModel>({length: amountOfSameCardsOnTable}).fill(card))
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value));
    
    }, [loadedCards]);
    const handleCardSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMemorieId(Number.parseInt(e.target.value));
        setdouplicatedAndRandomizedCardArray(null);
    }
    if(loadedCards === null || douplicatedAndRandomizedCardArray === null) {
        return (
            <div>
                <p>Loading app...</p>
            </div>
        )
    }
    const cardList = douplicatedAndRandomizedCardArray
        .map((card, index) => {
            return <MemorieCard key={card.name.toString().concat(card.identidfier.toString()).concat(index.toString())} id={card.identidfier.toString()} text={card.name}></MemorieCard>
        });
        return (
        <div>
            <select value={memorieId} onChange={handleCardSelectionChange}>
                <option value="1">Card Set 1</option>
                <option value="2">Card Set 2</option>
                <option value="3">Card Set 3</option>
            </select>
            <div id={`memorie-field-${props.id}`} data-testid={`memorie-field-${props.id}`} className={classes.memoriefield}>
                {cardList}
            </div>
        </div>
    )
}

export default MemorieField;