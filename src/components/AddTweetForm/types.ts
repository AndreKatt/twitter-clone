export type AddTweetFormProps = {
  type: "tweet" | "reply";
  maxRows?: number;
  minHeight: number;
  divider?: boolean;
  tweetId?: string;
};

export type StyledCircularProgressProps = {
  textLength: boolean;
};

export type BodyContainerProps = {
  minHeight: number;
};
