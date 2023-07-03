import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import PublicIcon from "@mui/icons-material/Public";
import { displayDescription, languagesDescriptions } from "../fixtures";
// types
import { SettingsData } from "./types";

export const settings: SettingsData[] = [
  {
    link: "display",
    icon: (
      <BrushOutlinedIcon style={{ fontSize: 21, margin: "0 10px 0 12px" }} />
    ),
    title: "Оформление",
    description: displayDescription,
  },
  {
    link: "languages",

    icon: <PublicIcon style={{ fontSize: 21 }} />,
    title: "Языки",
    description: languagesDescriptions.languages,
  },
];
