import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import DriveFile from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyIcon from "@mui/icons-material/Reply";
import { GetMenuItems } from "./types";
import { DeleteIcon } from "./styles";

export const getMenuItems: GetMenuItems = (t) => ({
  delete: { icon: <DeleteIcon />, label: `${t("tweet.menuLabels.delete")}` },
  pin: { icon: <PushPinOutlinedIcon />, label: `${t("tweet.menuLabels.pin")}` },
  edit: { icon: <DriveFile />, label: `${t("tweet.menuLabels.edit")}` },
});

export const footerIcons = [
  {
    id: "1",
    icon: <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 20 }} />,
    label: "521",
  },
  { id: "2", icon: <RepeatIcon style={{ fontSize: 20 }} />, label: "73" },
  {
    id: "3",
    icon: <FavoriteBorderIcon style={{ fontSize: 20 }} />,
    label: "189",
  },
  { id: "4", icon: <ReplyIcon style={{ fontSize: 20 }} />, label: "" },
];
