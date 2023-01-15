import { Action } from "redux";
import { TweetActionsType } from "../actionCreatores";
import { LoadingState, TweetState } from "./state";

export interface SetTweetDataActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_TWEET_DATA;
  payload: TweetState["data"];
}

export interface FetchTweetDataActionInterface
  extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_TWEET_DATA;
  payload: string;
}

export interface SetTweetDataLoadingStateActionInterface
  extends Action<TweetActionsType> {
  type: TweetActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}
