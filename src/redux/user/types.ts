import { LoadingState, SelectedUserData } from "../types";

export type SelectedUserState = {
  data?: SelectedUserData;
  status: LoadingState;
};
