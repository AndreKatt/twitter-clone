import { LoadingState } from "../types";
// types
import type { PublicationType } from "../../types";

export type TweetState = {
  data?: PublicationType;
  status: LoadingState;
};
