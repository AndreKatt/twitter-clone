import { styled } from "@mui/system";
import Typography, { TypographyProps } from "@mui/material/Typography";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyIcon from "@mui/icons-material/Reply";

export const FullTweetWrapper = styled("div")({
  borderBottom: "1px solid rgba(204, 214, 221)",
});

export const FullTweetContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  borderRadius: 0,
  padding: "10px 15px",
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
  "& h6": {
    fontWeight: 800,
  },
  "&:hover": {
    backgroundColor: theme.palette.neutral.light,
  },
}));

export const FooterContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  margin: "10px 20px 5px 20px",
  paddingTop: 5,
  borderTop: "1px solid rgba(204, 214, 221)",
});

export const HeaderTextContent = styled(Typography)({
  display: "flex",
  flexDirection: "column",

  "& div": {
    marginTop: -27,
  },
});

export const TweetText = styled(Typography)<TypographyProps>({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  fontSize: 18,
  marginTop: 5,
  marginLeft: 20,
  lineHeight: 1.3125,
  wordBreak: "break-word",
});

export const TweetData = styled(Typography)<TypographyProps>({
  marginTop: 20,
});

export const ChatIcon = styled(ChatBubbleOutlineOutlinedIcon)({
  fontSize: 25,
});

export const RepostIcon = styled(RepeatIcon)({
  fontSize: 25,
});

export const FavoriteIcon = styled(FavoriteBorderIcon)({
  fontSize: 25,
});

export const ShareIcon = styled(ReplyIcon)({
  fontSize: 25,
});
