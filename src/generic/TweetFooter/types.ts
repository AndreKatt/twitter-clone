import type { TweetType } from "../../types";

export type TweetFooterProps = {
  tweetData: TweetType;
  kind: "tweet" | "fullTweet";
};
