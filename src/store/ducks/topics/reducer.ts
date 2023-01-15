import produce from "immer";
import { Draft } from "immer/dist/internal";
import { TopicsActions, TopicsActionsType } from "./actionCreatores";
import { LoadingState, TopicsState } from "./contracts/state";

const initialTopicsState: TopicsState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

// immer
export const topicsReducer = produce(
  (draft: Draft<TopicsState>, action: TopicsActions) => {
    switch (action.type) {
      case TopicsActionsType.SET_TOPICS:
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;

      case TopicsActionsType.FETCH_TOPICS:
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
        break;

      case TopicsActionsType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;

      default:
        break;
    }
  },
  initialTopicsState
);
