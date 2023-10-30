import type { TFunction } from "i18next";
import type { HeaderSectionTitleType, Reply } from "../types";

export type GetSections = (
  arr: string[],
  type: string,
  t: TFunction,
  email?: string
) => HeaderSectionTitleType[];

type LanguagesDescriptions = {
  languagesText: string;
  displayLaguageText: string;
};

export type HeaderTitles = {
  home: string;
  bookmarks: string;
  settings: string;
  display: string;
  displayLaguage: string;
  background: string;
  languages: string;
  fullPublication: string;
};

export type GetTitles = (
  t: TFunction<"translation", undefined>
) => HeaderTitles;

export type GetLanguagesDescriptions = (
  t: TFunction<"translation", undefined>
) => LanguagesDescriptions;

export type GetDisplayDescription = (
  t: TFunction<"translation", undefined>
) => string;
type FooterIcon = {
  id: number;
  icon: JSX.Element;
  label: string;
  clickFunction?: () => void;
};

export type GetFooterIcons = (
  _id: string,
  likes: string[],
  retweets: string[],
  replies: Reply[],
  addLike: () => void
) => FooterIcon[];

type MenuItem = { icon: JSX.Element; label: string };

type MenuItems = {
  delete: MenuItem;
  pin: MenuItem;
  edit: MenuItem;
};

export type GetMenuItems = (
  t: TFunction<"translation", undefined>
) => MenuItems;
