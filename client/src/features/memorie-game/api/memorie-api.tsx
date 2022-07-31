import { MemorieCardModel } from "../models/memorie.dto"
import { useState, useEffect } from 'react';
import MemorieCard from "../card/memorie-card";


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
