import { LoadingState, Tweet } from "../types";

export type UserTweetsState = {
  items: Tweet[];
  status: LoadingState;
};
