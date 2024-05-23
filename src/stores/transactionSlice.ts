// transactionSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface TransactionState {
    type: string
    sendAmount: number
    recieveAmount: number
    senderCurrencyId: string
    recieverCurrencyId: string
}

const initialState: TransactionState = {
    type: "",
    sendAmount: 0,
    recieveAmount: 0,
    senderCurrencyId: "",
    recieverCurrencyId: ""
};

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        setTransaction: (state, action: PayloadAction<TransactionState>) => {
            return { ...state, ...action.payload };
        },
    },
});

// selector - allows app to update slice
export const { setTransaction } = transactionSlice.actions;

// selector - allows app to get slice
export const selectTransaction = (state: RootState) => state.transaction;

// reducer - registers slice in app redux-store
export default transactionSlice.reducer;
