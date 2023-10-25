import type { TFunction } from "i18next";

export type MainUserInfo = {
  email: string;
  fullname: string;
  username: string;
};

export type Reply = {
  user: MainUserInfo;
  text: string;
};

export type TweetType = {
  _id: string;
  text: string;
  images: [];
  user: MainUserInfo;
  likes: string[];
  retweets: string[];
  replies: Reply[];
  createdAt: string;
};

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
  title: { text: string; link?: string; isActive?: 0 | 1 };
};

export type ToggleColorMode = (changeMode: string) => void;

export type i18nProps = {
  t: TFunction<"translation", undefined>;
};

export type SelectedUserData = {
  _id: string;
  email: string;
  fullname: string;
  username: string;
  avatarUrl: string;
  confirmed: boolean;
  createdAt: string;
  following: [];
  followers: [];
  likes: [];
};

export type GetAvatarUrl = (email: string) => Promise<string>;
