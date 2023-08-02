import type { Reply } from "../../redux/types";

type FooterIcon = {
  id: number;
  icon: JSX.Element;
  label: string;
};

export type GetFooterIcons = (
  likes: string[],
  retweets: string[],
  replies: Reply[]
) => FooterIcon[];

export type TweetFooterProps = {
  likes?: string[];
  retweets?: string[];
  replies?: Reply[];
  kind: "tweet" | "fullTweet";
};
