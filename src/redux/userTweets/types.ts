import { LoadingState } from "../types";
// types
import type { Tweet } from "../types";

export type UserTweetsState = {
  items: Tweet[];
  status: LoadingState;
};
