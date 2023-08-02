import { RootState } from "../store";
import { LoadingState } from "../types";
// types
import type { SelectedUserState } from "./types";

export const selectSelectedUser = (state: RootState): SelectedUserState =>
  state.user;

export const selectSelectedUserData = (
  state: RootState
): SelectedUserState["data"] => selectSelectedUser(state).data;

export const selectSelectedUserStatus = (
  state: RootState
): SelectedUserState["status"] => selectSelectedUser(state).status;

export const selectSelectedUserLoading = (state: RootState): boolean =>
  selectSelectedUserStatus(state) === LoadingState.LOADING;
