import { RootState } from "../../store";
import { LoadingState, TweetState } from "./contracts/state";

export const selectTweet = (state: RootState): TweetState => state.tweet;

export const selectTweetData = (state: RootState): TweetState["data"] =>
  selectTweet(state).data;

export const selectTweetLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectTweetLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTweet(state).loadingState;
