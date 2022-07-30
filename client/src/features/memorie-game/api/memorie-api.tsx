import { MemorieCardModel } from "../models/memorie.dto"
import { useState, useEffect } from 'react';
import MemorieCard from "../card/memorie-card";

export function useMemorieCards(cardId: number): MemorieCardModel[] | null {    
    const [memorieCards, setNewDeckOfCards] = useState<MemorieCardModel[] | null>(null);


    useEffect(() => {
        function handleNewDataLoaded(cards: MemorieCardModel[]) {
          setNewDeckOfCards(cards);
        }
        const fetchApi = () => {
            fetch(`https://localhost:7008/MemorieDecks/${cardId}`)
                .then(response => { 
                    return response.json();
                })
                .then(json => {
                    console.log(json);
                    handleNewDataLoaded(json.cardsWithoutDoubles);
                })
        }
        fetchApi();
    },[cardId]);
    
    return memorieCards;
}
