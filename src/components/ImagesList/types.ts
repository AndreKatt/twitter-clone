export type ImageListProps = {
  images: string[];
  removeImage?: (url: string) => void;
};

export type ImageWrapperProps = {
  url: string;
};
