import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HealthType } from './use-health-check-memoire-api';

interface HealthState {
    memorieCardApiHealth: HealthType;
}

const initialState: HealthState = {
    memorieCardApiHealth: HealthType.unhealthy
}

export const memorieApiHealthSlice = createSlice({
  name: 'memorieApiHealth',
  initialState,
  reducers: {
    setHealthStatus: (state, action: PayloadAction<HealthType>) => {
        state.memorieCardApiHealth = action.payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { setHealthStatus } = memorieApiHealthSlice.actions
export default memorieApiHealthSlice.reducer