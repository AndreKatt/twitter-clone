import type { TFunction } from "i18next";
import type { HeaderSectionTitleType } from "../types";

type LanguagesDescriptions = {
  languagesText: string;
  displayLaguageText: string;
};

export type HeaderTitles = {
  home: string;
  explore: string;
  notifications: string;
  messages: string;
  bookmarks: string;
  verified: string;
  settings: string;
  display: string;
  displayLaguage: string;
  background: string;
  languages: string;
  fullTweet: string;
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

export type GetSections = (
  type: string,
  t: TFunction<"translation", undefined>,
  email?: string
) => HeaderSectionTitleType[];
