import { createSlice } from "@/lib/create-slice";
import { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  login: boolean;
}
const initialState: InitialState = {
  login: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: create => ({
    setLoginStatus: create.reducer((state, action: PayloadAction<boolean>) => {
      state.login = action.payload;
    }),
  }),
  selectors: {
    getLoginStatus: auth => auth.login,
  },
});

export const { setLoginStatus } = authSlice.actions;
export const { getLoginStatus } = authSlice.selectors;
