export type ImageListProps = {
  images: string[];
  removeImage?: (url: string) => void;
  type: "publication" | "publicationForm";
};

export type ImageWrapperProps = {
  url: string;
  type: ImageListProps["type"];
};

export type ImagesContainerProps = {
  type: ImageListProps["type"];
};
