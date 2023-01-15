import produce from "immer";
import { Draft } from "immer/dist/internal";
import { TweetsActions } from "./actionCreatores";
import { TweetsActionsType } from "./contracts/actionTypes";
import { AddFormState, LoadingState, TweetsState } from "./contracts/state";

const initialTweetsState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
  addFormState: AddFormState.NEVER,
};

// immer
export const tweetsReducer = produce(
  (draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
      case TweetsActionsType.SET_TWEETS:
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;

      case TweetsActionsType.FETCH_TWEETS:
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
        break;

      case TweetsActionsType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;

      case TweetsActionsType.SET_ADD_FORM_STATE:
        draft.addFormState = action.payload;
        break;

      case TweetsActionsType.FETCH_ADD_TWEET:
        draft.addFormState = AddFormState.LOADING;
        break;

      case TweetsActionsType.ADD_TWEET:
        draft.items.splice(0, 0, action.payload);
        draft.addFormState = AddFormState.NEVER;
        break;

      default:
        break;
    }
  },
  initialTweetsState
);
