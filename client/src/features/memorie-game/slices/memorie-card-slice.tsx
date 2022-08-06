import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MemorieCardsState {
    flippedCardIds: string[];
}

const initialState: MemorieCardsState = {
    flippedCardIds: []
}

export const memorieCardsSlice = createSlice({
  name: 'memorieCards',
  initialState,
  reducers: {
    flipCard: (state, action: PayloadAction<string>) => {
        state.flippedCardIds.push(action.payload);
    },
    startNextRound: (state) => {
        state.flippedCardIds = [];
    }
  }
})

// Action creators are generated for each case reducer function
export const { flipCard, startNextRound } = memorieCardsSlice.actions
export default memorieCardsSlice.reducer