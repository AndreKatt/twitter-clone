export enum LoadingState {
  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
  SUCCESS = "SUCCESS",
}

export type UserData = {
  _id: string;
  email: string;
  fullname: string;
  username: string;
  avatarUrl: string;
  passwordHash?: string;
  confirmHash?: string;
  confirmed?: boolean;
  createdAt?: string;
  following: string[];
  followers: string[];
};
