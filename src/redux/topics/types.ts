import { LoadingState } from "../types";

export type Topic = {
  _id: string;
  name: string;
  count: number;
};

export type TopicsState = {
  items: Topic[];
  status: LoadingState;
};
