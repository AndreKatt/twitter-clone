import type { TFunction } from "i18next";
import type { HeaderSectionTitleType } from "../types";

type Titles = {
  main?: string;
  sections?: HeaderSectionTitleType[];
};

type LanguagesDescriptions = {
  languages: string;
  displayLaguage: string;
};

export type HeaderTitles = {
  home: Titles;
  subscriptions: Titles;
  explore: Titles;
  notifications: Titles;
  messages: Titles;
  bookmarks: Titles;
  verified: Titles;
  settings: Titles;
  display: Titles;
  displayLaguage: Titles;
  background: Titles;
  languages: Titles;
  fullTweet: Titles;
};

export type GetTitles = (
  t: TFunction<"translation", undefined>,
  email?: string
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
) => Titles["sections"];
