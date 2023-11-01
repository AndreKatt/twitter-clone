import type { LoadingState } from "../types";
import type { MainUserInfo, PublicationType } from "../../types";

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
  items: PublicationType[];
  status: LoadingState;
  addFormState: AddFormState;
};
