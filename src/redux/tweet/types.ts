import { Tweet } from "../tweets/types";
import { LoadingState } from "../types";

export interface TweetState {
  data?: Tweet;
  status: LoadingState;
}
