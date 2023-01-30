import { createSlice } from "@reduxjs/toolkit";

import { LoadingState } from "../types";
import { SignInUserState } from "./types";
import { signIn } from "./asyncActions";

const initialState: SignInUserState = {
  data: undefined,
  token: undefined,
  status: LoadingState.NEVER,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.status = LoadingState.LOADING;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.token = action.payload.token;
      state.status = LoadingState.SUCCESS;
    });
    builder.addCase(signIn.rejected, (state) => {
      state.status = LoadingState.ERROR;
    });
  },
});

export default userSlice.reducer;
