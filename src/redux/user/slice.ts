import { createSlice } from "@reduxjs/toolkit";

import { LoadingState } from "../types";
import { SignInUserState } from "./types";
import { getCurrentUserByToken, signIn } from "./asyncActions";

const initialState: SignInUserState = {
  user: undefined,
  token: undefined,
  currentUser: undefined,
  loginStatus: LoadingState.NEVER,
  currentUserStatus: LoadingState.NEVER,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loginStatus = LoadingState.LOADING;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.loginStatus = LoadingState.SUCCESS;
        // setCurrentUser(action.payload);
        console.log(action.payload);
      })
      .addCase(signIn.rejected, (state) => {
        state.loginStatus = LoadingState.ERROR;
      })
      .addCase(getCurrentUserByToken.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.currentUserStatus = LoadingState.SUCCESS;
      })
      .addCase(getCurrentUserByToken.rejected, (state) => {
        state.currentUserStatus = LoadingState.ERROR;
      });
  },
});

export default userSlice.reducer;
