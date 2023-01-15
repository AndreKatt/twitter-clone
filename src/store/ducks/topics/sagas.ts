import { call, put, takeEvery } from "redux-saga/effects";
import { TopicsApi } from "../../../services/api/topicsApi ";
import {
  setTopics,
  setTopicsLoadingState,
  TopicsActionsType,
} from "./actionCreatores";
import { LoadingState, Topic } from "./contracts/state";

export function* fetchTopicsRequest() {
  try {
    const items: Topic[] = yield call(TopicsApi.fetchTopics);
    yield put(setTopics(items));
  } catch (e) {
    yield put(setTopicsLoadingState(LoadingState.ERROR));
  }
}

export function* topicsSaga() {
  yield takeEvery(TopicsActionsType.FETCH_TOPICS, fetchTopicsRequest);
}
