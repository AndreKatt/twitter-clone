import { LoadingState, Tweet } from "../types";

export enum AddFormState {
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

export type SendTweet = {
  text: string;
  user: {
    email: string;
    fullname: string;
    username: string;
    // avatarUrl: string;
  };
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
