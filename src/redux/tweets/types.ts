import { LoadingState } from "../types";

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

export type Tweet = {
  _id: string;
  text: string;
  images?: [];
  user: {
    email: string;
    fullname: string;
    username: string;
    // avatarUrl: string;
  };
  createdAt: string;
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
