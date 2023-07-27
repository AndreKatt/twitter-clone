import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import DriveFile from "@mui/icons-material/DriveFileRenameOutlineOutlined";
// styles
import { DeleteIcon } from "./styles";
// types
import { GetMenuItems } from "./types";

export const getMenuItems: GetMenuItems = (t) => ({
  delete: { icon: <DeleteIcon />, label: `${t("tweet.menuLabels.delete")}` },
  pin: { icon: <PushPinOutlinedIcon />, label: `${t("tweet.menuLabels.pin")}` },
  edit: { icon: <DriveFile />, label: `${t("tweet.menuLabels.edit")}` },
});
