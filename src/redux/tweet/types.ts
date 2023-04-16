import { LoadingState } from "../types";
// types
import type { Tweet } from "../tweets/types";

export type TweetState = {
  data?: Tweet;
  status: LoadingState;
};
