import { LoadingState } from "../types";
// types
import type { SelectedUserData } from "../types";

export type SelectedUserState = {
  data?: SelectedUserData;
  status: LoadingState;
};
