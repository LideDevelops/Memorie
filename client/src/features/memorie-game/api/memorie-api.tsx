import { MemorieCardModel } from "../models/memorie.dto"
import { useState, useEffect } from 'react';
import MemorieCard from "../card/memorie-card";

const dateTimeReviver = function (key, value) {
    var a;
    if (typeof value === 'string') {
        a = /\/Date\((\d*)\)\//.exec(value);
        if (a) {
            return new Date(+a[1]);
        }
    }
    return value;
}

export function useMemorieCards(cardId: number): MemorieCardModel[] | null {    
    const [memorieCards, setNewDeckOfCards] = useState<MemorieCardModel[] | null>(null);


    useEffect(() => {
        const fetchApi = () => {
            fetch(`https://localhost:7008/MemorieDecks/${cardId}`)
                .then(response => { 
                    return response.json();
                })
                .then(json => {
                    setNewDeckOfCards(json.cardsWithoutDoubles);
                })
        }
        fetchApi();
    },[cardId]);
    
    return memorieCards;
}
