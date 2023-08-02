import { LoadingState } from "../types";
// types
import type { MainUserInfo, UserData } from "../types";

export type Token = {
  access_token: string;
};

export type CurrentUserState = {
  user?: UserData;
  token?: Token;
  currentUser?: MainUserInfo;
  registerStatus: LoadingState;
  loginStatus: LoadingState;
  currentUserStatus: LoadingState;
  subscribeStatus: LoadingState;
  unsubscribeStatus: LoadingState;
};
