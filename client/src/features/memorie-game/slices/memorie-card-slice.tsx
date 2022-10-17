import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MemorieCardState } from '../models/memorie-card-state.dto';

const maxCardsToFlip = 2;



interface MemorieCard {
  id: string;
  state: MemorieCardState
}

interface MemorieCardsState {
    cardsLeftToFlip: number;
    roundCounter: number;
    cardIdsInGame: MemorieCard[];
}

const initialState: MemorieCardsState = {
    cardsLeftToFlip: maxCardsToFlip,
    roundCounter: 0,
    cardIdsInGame: []
}

export const memorieCardsSlice = createSlice({
  name: 'memorieCards',
  initialState,
  reducers: {
    flipCard: (state, action: PayloadAction<string>) => {
        const card = state.cardIdsInGame.filter(x => x.id == action.payload).at(0);
        if(card){
          card.state = MemorieCardState.InGameFlipped; 
        }  
        state.cardsLeftToFlip--;
    },
    startNextRound: (state) => {
        state.cardIdsInGame.filter(x => x.state !== MemorieCardState.Removed).forEach(x => x.state = MemorieCardState.InGameCovered);
        state.cardsLeftToFlip = maxCardsToFlip;
        state.roundCounter++;
    },
    beginGameWithCards: (state, action: PayloadAction<string[]>) => {
      state.roundCounter = 0;
      state.cardIdsInGame = action.payload.map<MemorieCard>(x => {
        return {
          id: x,
          state: MemorieCardState.InGameCovered
        }
      });
      state.cardsLeftToFlip = maxCardsToFlip;
    },
    removeIdFromGame: (state, action: PayloadAction<string>) => {
      state.cardIdsInGame.filter(x => x.id == action.payload).forEach(x => x.state = MemorieCardState.Removed)
    }
  }
});

// Action creators are generated for each case reducer function
export const { flipCard, startNextRound, beginGameWithCards, removeIdFromGame } = memorieCardsSlice.actions
export default memorieCardsSlice.reducer