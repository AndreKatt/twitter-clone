import type { Reply } from "../../redux/types";

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
  _id?: string;
  likes?: string[];
  retweets?: string[];
  replies?: Reply[];
  kind: "tweet" | "fullTweet";
};
