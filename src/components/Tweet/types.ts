import { HomeComponentStyleProps } from "../../types";

export type TweetProps = {
  _id: string;
  text: string;
  images?: string[];
  classes: HomeComponentStyleProps;
  fullname: string;
  userName: string;
  // avatarUrl: string;
  createdAt: string;
};
