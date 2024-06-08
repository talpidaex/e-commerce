import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

export const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});
