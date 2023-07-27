import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const FullTweetWrapper = styled(Paper)({
  borderRadius: 0,
  borderTop: 0,
  borderRight: 0,
  borderLeft: 0,
});

export const TweetText = styled(Typography)<TypographyProps>({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  fontSize: 18,
  lineHeight: 1.3125,
  wordBreak: "break-word",
  paddingLeft: 20,
  marginTop: 5,
});

export const TweetData = styled(Typography)<TypographyProps>({
  color: grey[500],
  margin: "20px 0",
});
