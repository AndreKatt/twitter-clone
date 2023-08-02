import { RootState } from "../store";
import { LoadingState } from "../types";
// types
import type { AllUsersState } from "./types";

export const selectUsers = (state: RootState): AllUsersState => state.users;

export const selectUsersLoading = (state: RootState): boolean =>
  selectUsers(state).status === LoadingState.LOADING;

export const selectUsersData = (state: RootState): AllUsersState["items"] =>
  selectUsers(state).items;
