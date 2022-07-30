import React, { useEffect, useState } from 'react';
import {useMemorieCards  } from '../api/memorie-api';
import MemorieCard from '../card/memorie-card';
import {  MemorieCardModel } from '../models/memorie.dto';

type MemorieFieldProps = {
    id: string;
}
const amountOfSameCardsOnTable = 2;

const MemorieField = (props: MemorieFieldProps) => {
    const [memorieId, setMemorieId] = useState<number>(1);
    const loadedCards = useMemorieCards(memorieId);

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
        .flatMap<MemorieCardModel>(card => Array.from<MemorieCardModel>({length: amountOfSameCardsOnTable}).fill(card))
        .map((card, index) => <MemorieCard key={card.name.toString().concat(card.identidfier.toString()).concat(index.toString())} id={card.name.toString().concat(card.identidfier.toString()).concat(index.toString())} text={card.name}></MemorieCard>)
        return (
        <div id={`memorie-field-${props.id}`} data-testid={`memorie-field-${props.id}`}>
                  <select 
        value={memorieId} 
        onChange={handleCardSelectionChange} 
      >
        <option value="1">Card Set 1</option>
        <option value="2">Card Set 2</option>
        <option value="3">Card Set 3</option>
      </select>
            {cardList}
        </div>
    )
}

export default MemorieField;