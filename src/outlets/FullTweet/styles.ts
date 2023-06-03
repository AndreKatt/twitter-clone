import { styled } from "@mui/system";
import Typography, { TypographyProps } from "@mui/material/Typography";

export const FullTweetWrapper = styled("div")({
  borderBottom: "1px solid rgba(204, 214, 221)",
});

export const FullTweetContainer = styled("div")({
  display: "flex",
  alignItems: "center", //flex-start????
  flexDirection: "row",
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  borderRadius: 0,
  padding: "10px 15px",
  //   paddingTop: 15,
  //   paddingLeft: 20,
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
  "& h6": {
    fontWeight: 800,
  },
  "&:hover": {
    backgroundColor: "rgb(245, 248, 250)",
  },
});

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
  fontSize: 24,
  marginTop: -10,
  marginLeft: 5,
  lineHeight: 1.3125,
  wordBreak: "break-word",
});

export const TweetData = styled(Typography)<TypographyProps>({
  marginTop: 20,
});
