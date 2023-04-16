import type { RootState } from "../store";
import type { SignInUserState } from "./types";

export const selectUserState = (state: RootState): SignInUserState =>
  state.user;

export const selectAuthState = (
  state: RootState
): SignInUserState["currentUserStatus"] =>
  selectUserState(state).currentUserStatus;

export const selectIsAuth = (state: RootState): boolean =>
  !!selectUserState(state).token;

export const selectCurrentUserStatus = (
  state: RootState
): SignInUserState["currentUserStatus"] => state.user.currentUserStatus;
