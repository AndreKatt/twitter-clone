import { RootState } from "../store";
import { LoadingState } from "../types";
import { SignInUserState } from "./types";

export const selectUserState = (state: RootState): SignInUserState =>
  state.user;

export const selectUserData = (state: RootState): SignInUserState["data"] =>
  selectUserState(state).data;

export const selectUserToken = (state: RootState): SignInUserState["token"] =>
  selectUserState(state).token;

export const selectUserLoadingState = (
  state: RootState
): SignInUserState["status"] => selectUserState(state).status;

export const selectUserError = (state: RootState): boolean =>
  selectUserLoadingState(state) === LoadingState.ERROR;
