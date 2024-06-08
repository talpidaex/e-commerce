import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/auth/auth-slice";

const rootReducer = combineSlices(authSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
