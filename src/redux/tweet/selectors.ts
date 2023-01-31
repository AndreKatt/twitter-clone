import { RootState } from "../store";
import { LoadingState } from "../types";
import { TweetState } from "./types";

export const selectTweet = (state: RootState): TweetState => state.tweet;

export const selectTweetData = (state: RootState): TweetState["data"] =>
  selectTweet(state).data;

export const selectTweetStatus = (state: RootState): TweetState["status"] =>
  selectTweet(state).status;

export const selectTweetLoading = (state: RootState): boolean =>
  selectTweetStatus(state) === LoadingState.LOADING;
