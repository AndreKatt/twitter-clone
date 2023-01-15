import { Action } from "redux";
import { TopicsActionsType } from "../actionCreatores";
import { TopicsState, LoadingState } from "./state";

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
