import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import DriveFile from "@mui/icons-material/DriveFileRenameOutlineOutlined";

import { GetMenuItems } from "./types";
import {
  ChatIcon,
  DeleteIcon,
  FavoriteIcon,
  RepostIcon,
  ShareIcon,
} from "./styles";

export const getMenuItems: GetMenuItems = (t) => ({
  delete: { icon: <DeleteIcon />, label: `${t("tweet.menuLabels.delete")}` },
  pin: { icon: <PushPinOutlinedIcon />, label: `${t("tweet.menuLabels.pin")}` },
  edit: { icon: <DriveFile />, label: `${t("tweet.menuLabels.edit")}` },
});

export const footerIcons = [
  {
    id: "1",
    icon: <ChatIcon />,
    label: "521",
  },
  { id: "2", icon: <RepostIcon />, label: "73" },
  {
    id: "3",
    icon: <FavoriteIcon />,
    label: "189",
  },
  { id: "4", icon: <ShareIcon />, label: "" },
];
