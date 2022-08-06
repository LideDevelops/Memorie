import { configureStore } from '@reduxjs/toolkit'
import memorieCardsReducer from '../memorie-game/slices/memorie-card-slice'
export const store = configureStore({
  reducer: {
    memorieCards: memorieCardsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
