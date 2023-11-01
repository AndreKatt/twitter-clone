import { LoadingState } from "../types";
// types
import type { PublicationType } from "../../types";

export type UserTweetsState = {
  items: PublicationType[];
  status: LoadingState;
};
