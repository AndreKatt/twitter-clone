import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import DriveFile from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyIcon from "@mui/icons-material/Reply";

export const menuItems = {
  delete: {
    icon: <DeleteOutlinedIcon style={{ color: "red" }} />,
    label: "Удалить твит",
  },
  pin: { icon: <PushPinOutlinedIcon />, label: "Закрепить в профиле" },
  edit: { icon: <DriveFile />, label: "Редактировать" },
};

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
