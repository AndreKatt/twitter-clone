import type { TweetType } from "../../types";

export type TweetProps = {
  type: "tweet" | "reply";
  tweetData: TweetType;
};
