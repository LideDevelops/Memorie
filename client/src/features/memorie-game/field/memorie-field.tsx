import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useAppDispatch, useAppSelector } from '../../state-management/hooks';
import { RootState } from '../../state-management/store';
import {useMemorieCards  } from '../api/memorie-api';
import MemorieCard from '../card/memorie-card';
import {  MemorieCardModel } from '../models/memorie.dto';
import { beginGameWithCards, removeIdFromGame, startNextRound } from '../slices/memorie-card-slice';

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
    const idsInGame = useAppSelector(state => state.memorieCards.cardIdsInGame)
    const flippedIds = useAppSelector(state => state.memorieCards.flippedCardIds)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(!canCardBeFlipped) {
            setTimeout(() => {
                if(flippedIds.every(x => x === flippedIds[0])) {
                    dispatch(removeIdFromGame(flippedIds[0]));
                }
                dispatch(startNextRound());
            }, 1000);
        }
    },[canCardBeFlipped])
    useEffect(() => {
        if(loadedCards == null) {
            return;
        }
        setdouplicatedAndRandomizedCardArray(loadedCards
        .flatMap<MemorieCardModel>(card => Array.from<MemorieCardModel>({length: amountOfSameCardsOnTable}).fill(card))
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value));
        const idList = loadedCards.map(card => card.identidfier.toString());
        dispatch(beginGameWithCards(idList))
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
        .filter(card => idsInGame.includes(card.identidfier.toString()))
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