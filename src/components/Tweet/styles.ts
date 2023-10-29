import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// types
import type { PaperProps } from "@mui/material/Paper";
import type { TypographyProps } from "@mui/material/Typography";

export const TweetContainer = styled(Paper)<PaperProps>(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  borderTop: 0,
  borderRight: 0,
  borderLeft: 0,
  borderRadius: 0,
  padding: "10px 0 2px 0",
  flexDirection: "row",
  paddingTop: 15,
  paddingLeft: 20,
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",

  "&:hover": {
    backgroundColor: theme.palette.neutral.light,
  },
}));

export const TweetDataContainer = styled("div")({
  width: "100%",
  display: "grid",
  paddingTop: 5,
  gridTemplateColumns: "auto 1fr",
});

export const HeaderTextContainer = styled("div")({
  flex: 1,
  display: "flex",
  justifyContent: "space-between",
});

export const TweetTextWrapper = styled(Typography)<TypographyProps>({
  wordBreak: "break-word",
});
