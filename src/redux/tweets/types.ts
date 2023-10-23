import type { LoadingState } from "../types";
import type { MainUserInfo, TweetType } from "../../types";

export enum AddFormState {
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

export type SendTweet = {
  text: string;
  user: MainUserInfo;
};

export type TweetsState = {
  items: TweetType[];
  status: LoadingState;
  addFormState: AddFormState;
};
