import type { LoadingState, MainUserInfo, Tweet } from "../types";

export enum AddFormState {
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

export type SendTweet = {
  text: string;
  user: MainUserInfo;
};

export type UploadedFileData = {
  width: number;
  height: number;
  url: string;
};

export type TweetsState = {
  items: Tweet[];
  status: LoadingState;
  addFormState: AddFormState;
};
