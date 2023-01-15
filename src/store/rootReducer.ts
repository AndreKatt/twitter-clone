import { combineReducers } from "redux";

import { tweetReducer } from "./ducks/tweet/reducer";
import { topicsReducer } from "./ducks/topics/reducer";
import { tweetsReducer } from "./ducks/tweets/reducer";

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tweet: tweetReducer,
  topics: topicsReducer,
});
