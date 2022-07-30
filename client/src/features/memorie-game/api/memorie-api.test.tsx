import { render, renderHook } from "@testing-library/react";
import { MemorieCardModel } from "../models/memorie.dto";
import { useMemorieCards } from "./memorie-api";

// test('load memorie items', async () => {
//     const mockData: MemorieCardModel[] = [
//         {
//             id: 1,
//             name: "MemCard1"
//         },
//         {
//             id: 2,
//             name: "MemCard2"
//         },
//         {
//             id: 3,
//             name: "MemCard3"
//         },
//         {
//             id: 4,
//             name: "MemCard4"
//         },
//     ]
//     const memorieApiData = setup();
//     act(() => memorieApiData.)
//     expect(memorieApiData).toStrictEqual(mockData);
// });

describe("useMyName tests", () => {
    it("loads the mock data", () => {
    const mockData: MemorieCardModel[] = [
        {
            identidfier: 1,
            name: "MemCard1",
            lastModified: new Date()
        },
        {
            identidfier: 2,
            name: "MemCard2",
            lastModified: new Date()
        },
        {
            identidfier: 3,
            name: "MemCard3",
            lastModified: new Date()
        },  
        {
            identidfier: 4,
            name: "MemCard4",
            lastModified: new Date()
        },
    ]

      const { result } = renderHook(() => useMemorieCards(1));
      expect(result.current).toStrictEqual(mockData);
    });
});