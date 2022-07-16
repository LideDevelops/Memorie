import { MemorieCardModel } from "../models/memorie.dto"

const mockData: MemorieCardModel[] = [
    {
        id: 1,
        name: "MemCard1"
    },
    {
        id: 2,
        name: "MemCard2"
    },
    {
        id: 3,
        name: "MemCard3"
    },
    {
        id: 4,
        name: "MemCard4"
    },
]


export async function getMemorieCards(): Promise<MemorieCardModel[]> {
    return mockData;
}