import { LoadingState } from "../types";
// types
import type { UserData } from "../types";

export type AllUsersState = {
  items: UserData[];
  status: LoadingState;
};
