import { LoadingState } from "../types";

export type SelectedUserData = {
  _id: string;
  email: string;
  fullname: string;
  username: string;
  confirmed: boolean;
  createdAt: string;
};

export type SelectedUserState = {
  data?: SelectedUserData;
  status: LoadingState;
};
