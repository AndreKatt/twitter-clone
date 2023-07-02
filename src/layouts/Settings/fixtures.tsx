import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import PublicIcon from "@mui/icons-material/Public";
import { SettingsData } from "./types";

export const settings: SettingsData[] = [
  {
    link: "display",
    icon: (
      <BrushOutlinedIcon style={{ fontSize: 21, margin: "0 10px 0 12px" }} />
    ),
    title: "Оформление",
    description:
      "Управляйте размером шрифта, цветами и фоном. Эти настройки влияют на все учетные записи Твиттера на этом устройстве.",
  },
  {
    link: "languages",

    icon: <PublicIcon style={{ fontSize: 21 }} />,
    title: "Языки",
    description:
      "Управляйте языками, которые используются для персонализации Твиттера.",
  },
];
