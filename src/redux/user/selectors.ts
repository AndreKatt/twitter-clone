import { RootState } from "../store";
import { SignInUserState } from "./types";

export const selectUserState = (state: RootState): SignInUserState =>
  state.user;

export const selectUserData = (state: RootState): SignInUserState["user"] =>
  selectUserState(state).user;

export const selectUserToken = (state: RootState): SignInUserState["token"] =>
  selectUserState(state).token;

export const selectUserLoadingState = (
  state: RootState
): SignInUserState["loginStatus"] => selectUserState(state).loginStatus;
