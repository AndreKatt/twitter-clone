import { LoadingState, TopicsState } from "./contracts/state";
import {
  SetTopicsActionInterface,
  FetchTopicsActionInterface,
  SetTopicsLoadingStateActionInterface,
} from "./contracts/actionTypes";

export enum TopicsActionsType {
  SET_TOPICS = "tweets/SET_TOPICS",
  FETCH_TOPICS = "tweets/FETCH_TOPICS",
  SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
}

export const setTopics = (
  payload: TopicsState["items"]
): SetTopicsActionInterface => ({
  type: TopicsActionsType.SET_TOPICS,
  payload,
});

export const fetchTopics = (): FetchTopicsActionInterface => ({
  type: TopicsActionsType.FETCH_TOPICS,
});

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
