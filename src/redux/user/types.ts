import { LoadingState } from "../types";

export interface Token {
  access_token: string;
}

export interface UserData {
  _id: string;
  email: string;
  username: string;
  fullname: string;
  password: string;
  confirmHash: string;
  confirmed?: boolean;
}

export interface SignInUserState {
  data?: UserData;
  token?: Token;
  status: LoadingState;
}
