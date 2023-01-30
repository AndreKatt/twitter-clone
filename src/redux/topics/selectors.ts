import { RootState } from "../store";
import { LoadingState } from "../types";
import { TopicsState } from "./types";

export const selectTopics = (state: RootState): TopicsState => state.topics;

export const selectTopicsItems = (state: RootState): TopicsState["items"] =>
  selectTopics(state).items;

export const selectTopicstStatus = (state: RootState): LoadingState =>
  selectTopics(state).status;

export const selectTopicsLoading = (state: RootState): boolean =>
  selectTopicstStatus(state) === LoadingState.LOADING;

export const selectTopicsLoaded = (state: RootState): boolean =>
  selectTopicstStatus(state) === LoadingState.LOADED;
