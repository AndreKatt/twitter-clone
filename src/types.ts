import { TFunction } from "i18next";

export type UploadedObject = {
  blobUrl: string;
  file: File;
};

export type LoginFormProps = {
  email: string;
  password: string;
};

export type HeaderSectionTitleType = {
  item: { title: string; active?: boolean };
};

export type ToggleColorMode = (changeMode: string) => void;

export type i18nProps = {
  t: TFunction<"translation", undefined>;
};
