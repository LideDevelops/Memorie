import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const maxCardsToFlip = 2;

interface MemorieCardsState {
    flippedCardIds: string[];
    cardsLeftToFlip: number;
}

const initialState: MemorieCardsState = {
    flippedCardIds: [],
    cardsLeftToFlip: maxCardsToFlip
}

export const memorieCardsSlice = createSlice({
  name: 'memorieCards',
  initialState,
  reducers: {
    flipCard: (state, action: PayloadAction<string>) => {
        state.flippedCardIds.push(action.payload);
        state.cardsLeftToFlip--;
    },
    startNextRound: (state) => {
        state.flippedCardIds = [];
        state.cardsLeftToFlip = maxCardsToFlip;
    }
  }
});

// Action creators are generated for each case reducer function
export const { flipCard, startNextRound } = memorieCardsSlice.actions
export default memorieCardsSlice.reducer