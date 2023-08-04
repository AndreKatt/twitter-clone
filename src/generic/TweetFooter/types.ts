import type { Reply, TweetType } from "../../types";

type FooterIcon = {
  id: number;
  icon: JSX.Element;
  label: string;
  clickFunction?: () => void;
};

export type GetFooterIcons = (
  likes: string[],
  retweets: string[],
  replies: Reply[],
  addLike: () => void
) => FooterIcon[];

export type TweetFooterProps = {
  tweetData: TweetType;
  kind: "tweet" | "fullTweet";
};
