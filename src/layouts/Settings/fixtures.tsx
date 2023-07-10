import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import PublicIcon from "@mui/icons-material/Public";
// types
import { GetSettingsData } from "./types";

export const getSettings: GetSettingsData = (t) => [
  {
    link: "display",
    icon: (
      <BrushOutlinedIcon style={{ fontSize: 21, margin: "0 10px 0 12px" }} />
    ),
    title: `${t("layoutTitles.displaySettings.main")}`,
    description: `${t("layoutTitles.displaySettings.description")}`,
  },
  {
    link: "languages",

    icon: <PublicIcon style={{ fontSize: 21 }} />,
    title: `${t("layoutTitles.languagesSettings.main")}`,
    description: `${t("layoutTitles.languagesSettings.description1")}`,
  },
];
