import type { GetTitles } from "./types";

export const getTitles: GetTitles = (t) => ({
  home: `${t("layouts.home")}`,
  notifications: `${t("layouts.notifications")}`,
  bookmarks: `${t("layouts.bookmarks")}`,
  settings: `${t("layouts.settings")}`,
  display: `${t("layouts.displaySettings.main")}`,
  languages: `${t("layouts.languagesSettings.main")}`,
  displayLaguage: `${t("layouts.languagesSettings.displayLaguage")}`,
  background: `${t("layouts.displaySettings.background")}`,
  fullPublication: `${t("layouts.fullPublication")}`,
});
