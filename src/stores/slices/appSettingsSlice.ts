// appSettingsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface AppSettingsState {
    transaction_fee_percentage: string
}

const initialState: AppSettingsState = {
    transaction_fee_percentage: ""
};

export const appSettingsSlice = createSlice({
    name: 'appSettings',
    initialState,
    reducers: {
        setAppSettings: (state, action: PayloadAction<AppSettingsState>) => {
            return { ...state, ...action.payload };
        },
    },
});

// selector - allows app to update slice
export const { setAppSettings } = appSettingsSlice.actions;

// selector - allows app to get slice
export const selectAppSettings = (state: RootState) => state.appSettings;

// reducer - registers slice in app redux-store
export default appSettingsSlice.reducer;
