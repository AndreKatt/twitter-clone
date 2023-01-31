import { LoadingState } from "../types";

export interface Token {
  access_token: string;
}

export interface UserData {
  _id: string;
  email: string;
  username: string;
  fullname: string;
  passwordHash: string;
  confirmHash: string;
  confirmed?: boolean;
}

export interface CurrentUserData {
  email: string;
  username: string;
  fullname: string;
}

export interface SignInUserState {
  user?: UserData;
  token?: Token;
  currentUser?: CurrentUserData;
  registerStatus: LoadingState;
  loginStatus: LoadingState;
  currentUserStatus: LoadingState;
}
