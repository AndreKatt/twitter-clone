import type { UploadedObject } from "../../types";

export type UploadImagesProps = {
  images: UploadedObject[];
  onChangeImages: (
    callback: (prev: UploadedObject[]) => UploadedObject[]
  ) => void;
};
