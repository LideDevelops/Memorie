import { act, renderHook } from '@testing-library/react-hooks'
import { MemorieDeckModel } from '../models/memorie-deck.dto';
import { MemorieCardModel } from "../models/memorie.dto";
import { useMemorieCards } from "./memorie-api";

beforeEach(() => {
    fetch.resetMocks();
  });

describe("useMemorieCards tests", () => {
    it("loads the mock data", async () => {
        const mockData: MemorieCardModel[] = [
            {
                identidfier: 1,
                name: "MemCard1",
                lastModified: "2022-07-31T09:58:28.514Z"
            },
            {
                identidfier: 2,
                name: "MemCard2",
                lastModified: "2022-07-31T09:58:28.514Z"
            },
            {
                identidfier: 3,
                name: "MemCard3",
                lastModified: "2022-07-31T09:58:28.514Z"
            },  
            {
                identidfier: 4,
                name: "MemCard4",
                lastModified: "2022-07-31T09:58:28.514Z"
            },
        ]
        const mockResponse: MemorieDeckModel = {
            identidfier: 1,
            lastModified: "2022-07-31T09:58:28.514Z",
            cardsWithoutDoubles: mockData
            
        }
        fetch.mockResponse(JSON.stringify(mockResponse));
        const { result, waitForNextUpdate  } = renderHook(() => useMemorieCards(1));

        await waitForNextUpdate(); 
        expect(result.current).toStrictEqual(mockData);
    });
});