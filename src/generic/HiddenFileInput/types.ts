import type { SelectedUserData, UploadedObject } from "../../types";

export type HiddenFileInputProps = {
  type: "publication" | "profile";
  inputRef: React.RefObject<HTMLInputElement>;
  onChangeImages?: (
    callback: (prev: UploadedObject[]) => UploadedObject[]
  ) => void;
  user?: SelectedUserData;
};
