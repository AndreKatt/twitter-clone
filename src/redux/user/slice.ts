import { createSlice } from "@reduxjs/toolkit";

import { LoadingState } from "../types";
import { SignInUserState } from "./types";
import { getCurrentUserByToken, signIn, signUp } from "./asyncActions";

const initialState: SignInUserState = {
  user: undefined,
  token: undefined,
  currentUser: undefined,
  registerStatus: LoadingState.NEVER,
  loginStatus: LoadingState.NEVER,
  currentUserStatus: LoadingState.NEVER,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.loginStatus = LoadingState.SUCCESS;
      })
      .addCase(signIn.rejected, (state) => {
        state.loginStatus = LoadingState.ERROR;
      })
      .addCase(getCurrentUserByToken.pending, (state) => {
        state.currentUserStatus = LoadingState.LOADING;
      })
      .addCase(getCurrentUserByToken.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.currentUserStatus = LoadingState.SUCCESS;
      })
      .addCase(getCurrentUserByToken.rejected, (state) => {
        state.currentUserStatus = LoadingState.ERROR;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.registerStatus = LoadingState.SUCCESS;
      })
      .addCase(signUp.rejected, (state) => {
        state.registerStatus = LoadingState.ERROR;
      });
  },
});

export default userSlice.reducer;
