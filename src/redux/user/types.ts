import { LoadingState } from "../types";

export type Token = {
  access_token: string;
};

export type UserData = {
  _id: string;
  email: string;
  username: string;
  fullname: string;
  passwordHash: string;
  confirmHash: string;
  confirmed?: boolean;
};

export type CurrentUserData = {
  email: string;
  username: string;
  fullname: string;
};

export type SignInUserState = {
  user?: UserData;
  token?: Token;
  currentUser?: CurrentUserData;
  registerStatus: LoadingState;
  loginStatus: LoadingState;
  currentUserStatus: LoadingState;
};
