import { LoadingState, UserData } from "../types";

export type AllUsersState = {
  items: UserData[];
  status: LoadingState;
};
