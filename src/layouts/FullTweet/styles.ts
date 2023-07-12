import { styled } from "@mui/system";
import Typography, { TypographyProps } from "@mui/material/Typography";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyIcon from "@mui/icons-material/Reply";
import Paper from "@mui/material/Paper";

export const FullTweetWrapper = styled(Paper)({
  borderRadius: 0,
  borderTop: 0,
  borderRight: 0,
  borderLeft: 0,
  padding: "0 20px",
});

export const FullTweetContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  borderRadius: 0,
  padding: "10px 0",
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
  margin: "5px 0",
  paddingTop: 5,
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
  lineHeight: 1.3125,
  wordBreak: "break-word",
});

export const TweetData = styled(Typography)<TypographyProps>({
  margin: "20px 0",
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
