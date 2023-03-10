import { LoadingState } from "../types";

export enum AddFormState {
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

export interface SendTweet {
  text: string;
  user: {
    email: string;
    fullname: string;
    username: string;
    // avatarUrl: string;
  };
}

export interface Tweet {
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
}

export interface UploadedFileData {
  width: number;
  height: number;
  url: string;
}

export interface TweetsState {
  items: Tweet[];
  status: LoadingState;
  addFormState: AddFormState;
}
