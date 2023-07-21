import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoadingState } from "../types";
import {
  getCurrentUserByToken,
  signIn,
  signUp,
  subscribe,
  unsubscribe,
} from "./asyncActions";
//types
import type { CurrentUserState } from "./types";

const initialState: CurrentUserState = {
  user: undefined,
  token: undefined,
  currentUser: undefined,
  registerStatus: LoadingState.NEVER,
  loginStatus: LoadingState.NEVER,
  currentUserStatus: LoadingState.NEVER,
  subscribeStatus: LoadingState.NEVER,
  unsubscribeStatus: LoadingState.NEVER,
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setSubscribeStatus(
      state,
      action: PayloadAction<CurrentUserState["subscribeStatus"]>
    ) {
      state.subscribeStatus = action.payload;
    },
    setUnsubscribeStatus(
      state,
      action: PayloadAction<CurrentUserState["unsubscribeStatus"]>
    ) {
      state.unsubscribeStatus = action.payload;
    },
  },
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
        state.currentUser = action.payload.currentUser;
        state.user = action.payload.user;
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
      })

      .addCase(subscribe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.subscribeStatus = LoadingState.SUCCESS;
      })
      .addCase(subscribe.rejected, (state) => {
        state.subscribeStatus = LoadingState.ERROR;
      })

      .addCase(unsubscribe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.unsubscribeStatus = LoadingState.SUCCESS;
      })
      .addCase(unsubscribe.rejected, (state) => {
        state.unsubscribeStatus = LoadingState.ERROR;
      });
  },
});

export const { setSubscribeStatus, setUnsubscribeStatus } = userSlice.actions;

export default userSlice.reducer;
