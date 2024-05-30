import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface GlobalConfigState {
    USD_NGN_MARKET_RATE: number;
    USD_NGN_BUY_RATE: number;
    USD_NGN_SELL_RATE: number;
}

const initialState: GlobalConfigState = {
    USD_NGN_MARKET_RATE: 0,
    USD_NGN_BUY_RATE: 0,
    USD_NGN_SELL_RATE: 0,
};

export const globalConfigSlice = createSlice({
    name: 'globalConfig',
    initialState,
    reducers: {
        setGlobalConfig: (state, action: PayloadAction<GlobalConfigState>) => {
            return { ...state, ...action.payload };
        },
    },
});

// selector - allows app to update slice
export const { setGlobalConfig } = globalConfigSlice.actions;

// selector - allows app to get slice
export const selectGlobalConfig = (state: RootState) => state.globalConfig;

// reducer - registers slice in app redux-store
export default globalConfigSlice.reducer;
