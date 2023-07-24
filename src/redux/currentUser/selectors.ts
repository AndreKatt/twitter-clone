import type { RootState } from "../store";
import type { CurrentUserState } from "./types";

export const selectUserState = (state: RootState): CurrentUserState =>
  state.currentUser;

export const selectCurrentUser = (
  state: RootState
): CurrentUserState["currentUser"] => selectUserState(state).currentUser;

export const selectCurrentUserData = (
  state: RootState
): CurrentUserState["user"] => selectUserState(state).user;

export const selectAuthState = (
  state: RootState
): CurrentUserState["currentUserStatus"] =>
  selectUserState(state).currentUserStatus;

export const selectIsAuth = (state: RootState): boolean =>
  !!selectUserState(state).token;

export const selectCurrentUserStatus = (
  state: RootState
): CurrentUserState["currentUserStatus"] => state.currentUser.currentUserStatus;
