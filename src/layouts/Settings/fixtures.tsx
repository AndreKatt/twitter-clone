import { BrushIcon, EarthIcon } from "./styles";
// types
import { GetSettingsData } from "./types";

export const getSettings: GetSettingsData = (t) => [
  {
    link: "display",
    icon: <BrushIcon />,
    title: `${t("layoutTitles.displaySettings.main")}`,
    description: `${t("layoutTitles.displaySettings.description")}`,
  },
  {
    link: "languages",

    icon: <EarthIcon />,
    title: `${t("layoutTitles.languagesSettings.main")}`,
    description: `${t("layoutTitles.languagesSettings.description1")}`,
  },
];
