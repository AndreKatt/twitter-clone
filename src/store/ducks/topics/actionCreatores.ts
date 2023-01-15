import { Action } from "redux";
import { LoadingState, TopicsState } from "./contracts/state";

export enum TopicsActionsType {
  SET_TOPICS = "tweets/SET_TOPICS",
  FETCH_TOPICS = "tweets/FETCH_TOPICS",
  SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
}

// interfaces
// set
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

// actions
// set
export const setTopics = (
  payload: TopicsState["items"]
): SetTopicsActionInterface => ({
  type: TopicsActionsType.SET_TOPICS,
  payload,
});

// fetch
export const fetchTopics = (): FetchTopicsActionInterface => ({
  type: TopicsActionsType.FETCH_TOPICS,
});

// loading
export const setTopicsLoadingState = (
  payload: LoadingState
): SetTopicsLoadingStateActionInterface => ({
  type: TopicsActionsType.SET_LOADING_STATE,
  payload,
});

export type TopicsActions =
  | SetTopicsActionInterface
  | FetchTopicsActionInterface
  | SetTopicsLoadingStateActionInterface;
