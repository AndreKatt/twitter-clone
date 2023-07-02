import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyIcon from "@mui/icons-material/Reply";

export const title = "Твит";

export const footerIcons = [
  {
    id: "1",
    icon: <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 25 }} />,
    count: "1",
  },
  { id: "2", icon: <RepeatIcon style={{ fontSize: 25 }} />, count: "174" },
  {
    id: "3",
    icon: <FavoriteBorderIcon style={{ fontSize: 25 }} />,
    count: "356",
  },
  { id: "4", icon: <ReplyIcon style={{ fontSize: 25 }} />, count: "" },
];
