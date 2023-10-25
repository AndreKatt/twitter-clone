import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyIcon from "@mui/icons-material/Reply";
// types
import type { GetFooterIcons } from "./types";

export const getFooterIcons: GetFooterIcons = (
  _id,
  likes,
  retweets,
  replies,
  addLike
) => [
  {
    id: 1,
    icon: <ChatBubbleOutlineOutlinedIcon />,
    label: `${replies.length}`,
  },
  { id: 2, icon: <RepeatIcon />, label: `${retweets.length}` },
  {
    id: 3,
    icon: <FavoriteBorderIcon id={`${_id}`} className="likeButton" />,
    label: `${likes.length}`,
    clickFunction: addLike,
  },
  { id: 4, icon: <ReplyIcon />, label: "" },
];
