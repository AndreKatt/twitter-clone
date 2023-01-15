import { call, put, takeEvery } from "redux-saga/effects";

import { TweetsApi } from "../../../services/api/tweetsApi";
import { Tweet } from "../tweets/contracts/state";
import { LoadingState } from "./contracts/state";
import { setTweetData, setTweetDataLoadingState } from "./actionCreatores";
import {
  FetchTweetDataActionInterface,
  TweetActionsType,
} from "./contracts/actionTypes";

export function* fetchTweetRequest({
  payload: tweetId,
}: FetchTweetDataActionInterface) {
  try {
    const data: Tweet = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweetData(data));
  } catch (e) {
    yield put(setTweetDataLoadingState(LoadingState.ERROR));
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTweetRequest);
}
