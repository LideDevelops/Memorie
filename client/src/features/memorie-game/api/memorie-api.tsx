import { MemorieCard } from "../models/memorie.dto"

const mockData: MemorieCard[] = [
    {
        id: 1,
        name: "MemCard1"
    },
    {
        id: 2,
        name: "MemCard1"
    },
    {
        id: 3,
        name: "MemCard1"
    },
    {
        id: 4,
        name: "MemCard1"
    },
]


export async function getMemorieCards(): Promise<MemorieCard[]> {
    return mockData;
}