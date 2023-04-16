import type { HomeComponentStyleProps } from "../../types";

export type ImageListProps = {
  images: string[];
  classes: HomeComponentStyleProps;
  removeImage?: (url: string) => void;
};
