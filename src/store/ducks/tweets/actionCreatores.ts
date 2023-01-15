import {
  AddFormState,
  LoadingState,
  Tweet,
  TweetsState,
} from "./contracts/state";
import {
  SetTweetsActionInterface,
  FetchTweetsActionInterface,
  SetTweetsLoadingStateActionInterface,
  FetchAddTweetActionInterface,
  AddTweetActionInterface,
  SetAddFormStateActionInterface,
  TweetsActionsType,
} from "./contracts/actionTypes";

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

export const setAddFormState = (
  payload: AddFormState
): SetAddFormStateActionInterface => ({
  type: TweetsActionsType.SET_ADD_FORM_STATE,
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
  | FetchAddTweetActionInterface
  | SetAddFormStateActionInterface;