import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import transactionReducer from "./transactionSlice";

export const makeStore = () => {
return configureStore({
  reducer: {
    transaction: transactionReducer,
  },
});
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']