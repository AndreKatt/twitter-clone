import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState, TweetsState } from "./contracts/state";

export const selectTweets = (state: RootState): TweetsState => state.tweets;

export const selectTweetsItems = createSelector(
  selectTweets,
  (tweets) => tweets.items
);

export const selectTweetsLoading = (state: RootState): boolean =>
  selectLoadindState(state) === LoadingState.LOADING;

export const selectLoadindState = (state: RootState): LoadingState =>
  selectTweets(state).loadingState;
