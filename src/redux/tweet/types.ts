import { LoadingState, Tweet } from "../types";

export type TweetState = {
  data?: Tweet;
  status: LoadingState;
};
