import { LoadingState, TopicsState } from "./contracts/state";
import {
  SetTopicsActionInterface,
  FetchTopicsActionInterface,
  SetTopicsLoadingStateActionInterface,
  TopicsActionsType,
} from "./contracts/actionTypes";

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
