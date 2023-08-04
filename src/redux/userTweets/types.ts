import { LoadingState } from "../types";
// types
import type { TweetType } from "../../types";

export type UserTweetsState = {
  items: TweetType[];
  status: LoadingState;
};
