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
