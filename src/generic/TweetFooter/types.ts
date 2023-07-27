export type TweetFooterProps = {
  kind: "tweet" | "fullTweet";
};

export type FooterIcon = {
  id: number;
  icon: JSX.Element;
  label: string;
};
