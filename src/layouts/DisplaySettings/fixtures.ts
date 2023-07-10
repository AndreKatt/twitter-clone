import { GetButtonLabels } from "./types";

export const getButtonLabels: GetButtonLabels = (t) => ({
  light: `${t("layoutTitles.displaySettings.buttonLabels.light")}`,
  dark: `${t("layoutTitles.displaySettings.buttonLabels.dark")}`,
});
