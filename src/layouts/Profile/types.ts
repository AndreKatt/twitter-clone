export type IconButton = {
  id: number;
  icon: JSX.Element;
};

export type ProfileProps = {
  type: "tweets" | "replies" | "highlights" | "media" | "likes";
};
