import { LoadingState } from "../types";
// types
import type { TweetType } from "../../types";

export type TweetState = {
  data?: TweetType;
  status: LoadingState;
};
