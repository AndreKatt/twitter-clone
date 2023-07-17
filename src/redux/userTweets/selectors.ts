import { RootState } from "../store";
import { LoadingState } from "../types";
import { UserTweetsState } from "./types";

export const selectUserTweets = (state: RootState): UserTweetsState =>
  state.userTweets;

export const selectUserTweetsState = (
  state: RootState
): UserTweetsState["status"] => selectUserTweets(state).status;

export const selectUserTweetsItems = (
  state: RootState
): UserTweetsState["items"] => selectUserTweets(state).items;

export const selectUserTweetsLoading = (state: RootState): boolean =>
  selectUserTweetsState(state) === LoadingState.LOADING;
