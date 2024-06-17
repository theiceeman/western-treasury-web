import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./slices/transactionSlice";
import globalConfigReducer from "./slices/globalConfigSlice";
import appSettingsReducer from "./slices/appSettingsSlice";
import userReducer from "./slices/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      transaction: transactionReducer,
      globalConfig: globalConfigReducer,
      appSettings: appSettingsReducer,
    },
  });
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']