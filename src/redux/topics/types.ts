import { LoadingState } from "../types";

export interface Topic {
  _id: string;
  name: string;
  count: number;
}

export interface TopicsState {
  items: Topic[];
  status: LoadingState;
}
