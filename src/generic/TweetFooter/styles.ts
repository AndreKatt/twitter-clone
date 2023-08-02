import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
// types
import type { IconButtonProps } from "@mui/material/IconButton";
import type { TweetFooterProps } from "./types";

export const FooterWrapper = styled("div")<TweetFooterProps>(({ kind }) => ({
  position: "relative",
  display: "grid",
  justifyContent: "space-between",
  gridTemplateColumns: "65px 65px 65px 65px",

  ...(kind === "tweet"
    ? {
        left: -13,
      }
    : {
        left: 13,
        paddingRight: 30,
      }),
}));

export const FooterContainer = styled("div")<TweetFooterProps>(({ kind }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "inherit",

  ...(kind === "fullTweet" && {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: "5px 0 0 20px",
    margin: "5px 0",
  }),
}));

export const FooterIcon = styled(IconButton)<
  IconButtonProps & TweetFooterProps
>(({ kind, theme }) => ({
  fontSize: kind === "tweet" ? "20px !important" : "25px !important",

  "&:hover": {
    "& svg path": {
      fill: theme.palette.primary.main,
    },
  },
}));
