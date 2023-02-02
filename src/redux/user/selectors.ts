import { RootState } from "../store";
import { SignInUserState } from "./types";

export const selectUserState = (state: RootState): SignInUserState =>
  state.user;

export const selectAuthState = (
  state: RootState
): SignInUserState["currentUserStatus"] =>
  selectUserState(state).currentUserStatus;

export const selectIsAuth = (state: RootState): boolean =>
  !!selectUserState(state).token;
