import React, { useEffect, useState } from 'react';
import {useMemorieCards  } from '../api/memorie-api';
import MemorieCard from '../card/memorie-card';
import {  MemorieCardModel } from '../models/memorie.dto';

type MemorieFieldProps = {
    id: string;
}
const amountOfSameCardsOnTable = 2;

const MemorieField = (props: MemorieFieldProps) => {
    const loadedCards = useMemorieCards();

    const cardList = loadedCards
        .flatMap<MemorieCardModel>(card => Array.from<MemorieCardModel>({length: amountOfSameCardsOnTable}).fill(card))
        .map((card, index) => <MemorieCard key={card.name.toString().concat(card.id.toString()).concat(index.toString())} id={card.name.toString().concat(card.id.toString()).concat(index.toString())} text={card.name}></MemorieCard>)
        return (
        <div id={`memorie-field-${props.id}`} data-testid={`memorie-field-${props.id}`}>
            {cardList}
        </div>
    )
}

export default MemorieField;