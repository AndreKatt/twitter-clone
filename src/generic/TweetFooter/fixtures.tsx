import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyIcon from "@mui/icons-material/Reply";
// types
import { FooterIcon } from "./types";

export const footerIcons: FooterIcon[] = [
  {
    id: 1,
    icon: <ChatBubbleOutlineOutlinedIcon />,
    label: "521",
  },
  { id: 2, icon: <RepeatIcon />, label: "73" },
  {
    id: 3,
    icon: <FavoriteBorderIcon />,
    label: "189",
  },
  { id: 4, icon: <ReplyIcon />, label: "" },
];
