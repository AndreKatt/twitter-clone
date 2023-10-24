import type {
  GetDisplayDescription,
  GetLanguagesDescriptions,
  GetTitles,
} from "./types";

export const getTitles: GetTitles = (t) => ({
  home: `${t("layouts.home")}`,
  explore: `${t("topics.label")}`,
  notifications: `${t("layouts.notifications")}`,
  bookmarks: `${t("layouts.bookmarks")}`,
  settings: `${t("layouts.settings")}`,
  display: `${t("layouts.displaySettings.main")}`,
  languages: `${t("layouts.languagesSettings.main")}`,
  displayLaguage: `${t("layouts.languagesSettings.displayLaguage")}`,
  background: `${t("layouts.displaySettings.background")}`,
  fullTweet: `${t("layouts.fullTweet")}`,
});

export const getLanguagesDescriptions: GetLanguagesDescriptions = (t) => ({
  languagesText: `${t("layouts.languagesSettings.description1")}`,
  displayLaguageText: `${t("layouts.languagesSettings.description2")}`,
});

export const getDisplayDescription: GetDisplayDescription = (t) =>
  `${t("layouts.displaySettings.description")}`;
