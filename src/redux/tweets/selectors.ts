import { RootState } from "../store";
import { LoadingState } from "../types";
import { AddFormState, TweetsState } from "./types";

export const selectTweets = (state: RootState): TweetsState => state.tweets;

export const selectTweetsState = (state: RootState): TweetsState["status"] =>
  selectTweets(state).status;

export const selectTweetsItems = (state: RootState): TweetsState["items"] =>
  selectTweets(state).items;

export const selectTweetsLoading = (state: RootState): boolean =>
  selectTweetsState(state) === LoadingState.LOADING;

export const selectAddFormState = (state: RootState): AddFormState =>
  selectTweets(state).addFormState;
