import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import DriveFile from "@mui/icons-material/DriveFileRenameOutlineOutlined";
// types
import type { GetMenuItems } from "./types";

export const getPublicationMenuItems: GetMenuItems = (t) => ({
  delete: {
    icon: <DeleteOutlinedIcon sx={{ color: "red" }} />,
    label: `${t("publication.menuLabels.delete")}`,
  },
  pin: {
    icon: <PushPinOutlinedIcon />,
    label: `${t("publication.menuLabels.pin")}`,
  },
  edit: { icon: <DriveFile />, label: `${t("publication.menuLabels.edit")}` },
});
