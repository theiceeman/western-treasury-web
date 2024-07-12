// transactionSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface TransactionState {
    type: string
    amountInUsd: number
    transactionFee: number
    paymentType: string
    inProgress: boolean
    sendAmount: number
    recieveAmount: number
    sendCurrency: any
    recieveCurrency: any
    transactionId?: string
    recievingWalletAddress?: any
}

const initialState: TransactionState = {
    type: "",
    paymentType: "",
    transactionFee: 0,
    amountInUsd: 0,
    inProgress: false,
    sendAmount: 0,
    recieveAmount: 0,
    sendCurrency: null,
    recieveCurrency: null,
    transactionId: '',
    recievingWalletAddress: ''
};

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        resetTransaction: () => initialState,
        setTransaction: (state, action: PayloadAction<TransactionState>) => {
            return { ...state, ...action.payload };
        },
    },
});

// selector - allows app to update slice
export const { setTransaction, resetTransaction } = transactionSlice.actions;

// selector - allows app to get slice
export const selectTransaction = (state: RootState) => state.transaction;

// reducer - registers slice in app redux-store
export default transactionSlice.reducer;
