export type ImageListProps = {
  images: string[];
  removeImage?: (url: string) => void;
  type: "tweet" | "tweetForm";
};

export type ImageWrapperProps = {
  url: string;
  type: ImageListProps["type"];
};

export type ImagesContainerProps = {
  type: ImageListProps["type"];
};
