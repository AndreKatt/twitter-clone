import type { SelectedUserData, UploadedObject } from "../../types";

export type HiddenFileInputProps = {
  type: "publication" | "setAvatar" | "setProfileImage";
  inputRef: React.RefObject<HTMLInputElement>;
  onChangeImages?: (
    callback: (prev: UploadedObject[]) => UploadedObject[]
  ) => void;
  user?: SelectedUserData;
};
