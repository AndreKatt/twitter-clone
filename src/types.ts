import type { TFunction } from "i18next";

export type UploadedObject = {
  blobUrl: string;
  file: File;
};

export type RegisterFormProps = {
  email: string;
  username: string;
  fullname: string;
  password: string;
  password2: string;
};

export type LoginFormProps = {
  email: string;
  password: string;
};

export type HeaderSectionTitleType = {
  title: { text: string; link?: string; isActive?: boolean };
};

export type ToggleColorMode = (changeMode: string) => void;

export type i18nProps = {
  t: TFunction<"translation", undefined>;
};
