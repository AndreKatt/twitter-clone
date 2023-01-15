import { createSelector } from "reselect";

import { RootState } from "../../store";
import { LoadingState, TopicsState } from "./contracts/state";

export const selectTopics = (state: RootState): TopicsState => state.topics;

export const selectTopicsItems = createSelector(
  selectTopics,
  (topics) => topics.items
);

export const selectTopicsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectTopicsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTopics(state).loadingState;
