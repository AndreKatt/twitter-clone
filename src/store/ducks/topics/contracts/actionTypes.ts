import { Action } from "redux";

import { TopicsState, LoadingState } from "./state";

export enum TopicsActionsType {
  SET_TOPICS = "tweets/SET_TOPICS",
  FETCH_TOPICS = "tweets/FETCH_TOPICS",
  SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
}

export interface SetTopicsActionInterface extends Action<TopicsActionsType> {
  type: TopicsActionsType.SET_TOPICS;
  payload: TopicsState["items"];
}

//fetch
export interface FetchTopicsActionInterface extends Action<TopicsActionsType> {
  type: TopicsActionsType.FETCH_TOPICS;
}

//loading
export interface SetTopicsLoadingStateActionInterface
  extends Action<TopicsActionsType> {
  type: TopicsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}
