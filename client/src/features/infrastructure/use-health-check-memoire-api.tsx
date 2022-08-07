import { STATUS_CODES } from "http";
import { useEffect, useState } from "react";
import enviroment from '../../enviroment.json'

export enum HealthType {
    healthy,
    unhealthy,
    degraded
}

export function useHealthCheckMemorieApi() {
    const [health, setHealth] = useState<HealthType>(HealthType.unhealthy);
    useEffect(() => {
        const fetchMemorieCardHealth = () => {
            fetch(`${enviroment.memorieApiBaseUrl}/health`)
                .then(response => { 
                    if(response.status === 200) {
                        setHealth(HealthType.healthy);
                    }
                    else {
                        setHealth(HealthType.unhealthy);
                    }
                })
                .catch(error => {
                    console.group(`Error on health route`);
                    console.log(`Error on HTTP request for Memorie API. Error was:`);
                    console.log(error);
                    console.groupEnd();
                    setHealth(HealthType.unhealthy);
                });
        }
        fetchMemorieCardHealth();
        const interval = setInterval(() => fetchMemorieCardHealth(), 5000);
        return () => {
            clearInterval(interval);
        }
    },[]);
    return health;
}