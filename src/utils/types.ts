import type { TFunction } from "i18next";
import type { HeaderSectionTitleType } from "../types";

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
  notifications: string;
  bookmarks: string;
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
