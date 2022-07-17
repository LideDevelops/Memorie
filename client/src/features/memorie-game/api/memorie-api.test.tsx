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

      const { result } = renderHook(() => useMemorieCards());
      expect(result.current).toStrictEqual(mockData);
    });
});