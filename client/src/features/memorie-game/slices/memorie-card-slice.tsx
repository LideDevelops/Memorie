import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const maxCardsToFlip = 2;

interface MemorieCardsState {
    flippedCardIds: string[];
    cardsLeftToFlip: number;
    roundCounter: number;
    cardIdsInGame: string[];
}

const initialState: MemorieCardsState = {
    flippedCardIds: [],
    cardsLeftToFlip: maxCardsToFlip,
    roundCounter: 0,
    cardIdsInGame: []
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
        state.roundCounter++;
    },
    beginGameWithCards: (state, action: PayloadAction<string[]>) => {
      state.roundCounter = 0;
      state.flippedCardIds = [];
      state.cardIdsInGame = action.payload;
      state.cardsLeftToFlip = maxCardsToFlip;
    },
    removeIdFromGame: (state, action: PayloadAction<string>) => {
      state.cardIdsInGame = state.cardIdsInGame.filter(x => x !== action.payload);
    }
  }
});

// Action creators are generated for each case reducer function
export const { flipCard, startNextRound, beginGameWithCards, removeIdFromGame } = memorieCardsSlice.actions
export default memorieCardsSlice.reducer