import type { GetButtonLabels } from "./types";

export const getButtonLabels: GetButtonLabels = (t) => ({
  light: `${t("layouts.displaySettings.buttonLabels.light")}`,
  dark: `${t("layouts.displaySettings.buttonLabels.dark")}`,
});
