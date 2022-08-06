import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import {useMemorieCards  } from '../api/memorie-api';
import MemorieCard from '../card/memorie-card';
import {  MemorieCardModel } from '../models/memorie.dto';

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
    const loadedCards = useMemorieCards(memorieId);
    const classes = useStyles();

    const handleCardSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMemorieId(Number.parseInt(e.target.value));
    }
    if(loadedCards == null) {
        return (
            <div>
                <p>Loading app...</p>
            </div>
        )
    }
    const cardList = loadedCards
        .map<MemorieCardModel[]>(card => Array.from<MemorieCardModel>({length: amountOfSameCardsOnTable}).fill(card))
        .flatMap((sameCards) => {
            return sameCards.map((card, index) => <MemorieCard key={card.name.toString().concat(card.identidfier.toString()).concat(index.toString())} id={card.identidfier.toString()} text={card.name}></MemorieCard>);
        })
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
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