import { MemorieCard } from "../models/memorie.dto";
import { getMemorieCards } from "./memorie-api";

test('load memorie items', async () => {
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
    let data = await getMemorieCards();
    expect(data).toStrictEqual(mockData);
});