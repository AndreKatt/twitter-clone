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
  passwordHash?: string;
  confirmHash?: string;
  confirmed?: boolean;
  createdAt?: string;
  following: string[];
  followers: string[];
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

export type SelectedUserData = {
  _id: string;
  email: string;
  fullname: string;
  username: string;
  confirmed: boolean;
  createdAt: string;
  following: [];
  followers: [];
};
