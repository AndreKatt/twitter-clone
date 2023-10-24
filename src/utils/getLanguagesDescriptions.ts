import type { GetLanguagesDescriptions } from "./types";

export const getLanguagesDescriptions: GetLanguagesDescriptions = (t) => ({
  languagesText: `${t("layouts.languagesSettings.description1")}`,
  displayLaguageText: `${t("layouts.languagesSettings.description2")}`,
});
