// styles
import { BrushIcon, EarthIcon } from "./styles";
// types
import { GetSettingsData } from "./types";

export const getSettings: GetSettingsData = (t) => [
  {
    link: "display",
    icon: <BrushIcon />,
    title: `${t("layouts.displaySettings.main")}`,
    description: `${t("layouts.displaySettings.description")}`,
  },
  {
    link: "languages",

    icon: <EarthIcon />,
    title: `${t("layouts.languagesSettings.main")}`,
    description: `${t("layouts.languagesSettings.description1")}`,
  },
];
