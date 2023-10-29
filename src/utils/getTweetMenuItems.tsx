import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import DriveFile from "@mui/icons-material/DriveFileRenameOutlineOutlined";
// types
import type { GetMenuItems } from "./types";

export const getTweetMenuItems: GetMenuItems = (t) => ({
  delete: {
    icon: <DeleteOutlinedIcon sx={{ color: "red" }} />,
    label: `${t("tweet.menuLabels.delete")}`,
  },
  pin: { icon: <PushPinOutlinedIcon />, label: `${t("tweet.menuLabels.pin")}` },
  edit: { icon: <DriveFile />, label: `${t("tweet.menuLabels.edit")}` },
});
