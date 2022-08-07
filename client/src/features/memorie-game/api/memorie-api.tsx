import { MemorieCardModel } from "../models/memorie.dto"
import { useState, useEffect } from 'react';
import MemorieCard from "../card/memorie-card";
import enviroment from '../../../enviroment.json'
import { HealthType, useHealthCheckMemorieApi } from "../../infrastructure/use-health-check-memoire-api";

export function useMemorieCards(cardId: number): MemorieCardModel[] | null {    
    const [memorieCards, setNewDeckOfCards] = useState<MemorieCardModel[] | null>(null);
    const health = useHealthCheckMemorieApi();

    useEffect(() => {
        if(health === HealthType.healthy) {
            const fetchApi = () => {
                fetch(`${enviroment.memorieApiBaseUrl}/MemorieDecks/${cardId}`)
                    .then(response => { 
                        console.log()
                        return response.json();
                    })
                    .then(json => {
                        setNewDeckOfCards(json.cardsWithoutDoubles);
                    })
                    .catch(error => {
                        console.group(`Error Fetch MemorieDecks ${cardId}`);
                        console.log(`Error on HTTP request for MemorieDeck with id ${cardId}. Error was:`);
                        console.log(error);
                        console.groupEnd();
                    });
            }
            fetchApi();
        }
        else {
            setNewDeckOfCards(null);
        }
    },[cardId, health]);
    
    return memorieCards;
}
