import { configureStore } from '@reduxjs/toolkit'
import memorieApiHealthReducer from '../infrastructure/health-slice'
import memorieCardsReducer from '../memorie-game/slices/memorie-card-slice'
export const store = configureStore({
  reducer: {
    memorieCards: memorieCardsReducer,
    memorieApiHealth: memorieApiHealthReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
