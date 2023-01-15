import { LoadingState, Tweet, TweetsState } from "./contracts/state";
import {
  SetTweetsActionInterface,
  FetchTweetsActionInterface,
  SetTweetsLoadingStateActionInterface,
  FetchAddTweetActionInterface,
  AddTweetActionInterface,
} from "./contracts/actionTypes";

export enum TweetsActionsType {
  SET_TWEETS = "tweets/SET_TWEETS",
  FETCH_TWEETS = "tweets/FETCH_TWEETS",
  SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
  FETCH_ADD_TWEET = "tweets/FETCH_ADD_TWEET",
  ADD_TWEET = "tweets/ADD_TWEET",
}

export const setTweets = (
  payload: TweetsState["items"]
): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export const fetchAddTweet = (
  payload: string
): FetchAddTweetActionInterface => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
});

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export const setTweetsLoadingState = (
  payload: LoadingState
): SetTweetsLoadingStateActionInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});

export type TweetsActions =
  | SetTweetsActionInterface
  | FetchTweetsActionInterface
  | SetTweetsLoadingStateActionInterface
  | AddTweetActionInterface
  | FetchAddTweetActionInterface;
