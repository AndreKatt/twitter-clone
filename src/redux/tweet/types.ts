import { LoadingState } from "../types";
// types
import type { Tweet } from "../types";

export type TweetState = {
  data?: Tweet;
  status: LoadingState;
};
