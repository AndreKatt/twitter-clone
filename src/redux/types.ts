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
  username: string;
  fullname: string;
  passwordHash: string;
  confirmHash: string;
  confirmed?: boolean;
};
