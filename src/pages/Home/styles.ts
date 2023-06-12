import { styled } from "@mui/system";
import Paper, { PaperProps } from "@mui/material/Paper";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Grid, { GridProps } from "@mui/material/Grid";

export const MenuGrid = styled(Grid)<GridProps>({
  "@media(max-height: 1240px)": {
    display: "flex",
    justifyContent: "flex-end",
  },
});

export const AddTweetWrapper = styled("div")({
  padding: 20,
});

export const AddTweetBottomLine = styled("div")({
  height: 12,
  backgroundColor: "#E6ECF0",
});

export const RightSideContainer = styled("div")({
  paddingTop: 20,
  position: "sticky",
  top: 0,
});

export const TweetsContainer = styled(Paper)<PaperProps>({
  borderRadius: 0,
  height: "100%",
  borderTop: 0,
  borderBottom: 0,
});

export const TweetsHeader = styled(Paper)<PaperProps>({
  position: "sticky",
  top: 0,
  zIndex: 2,
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  display: "flex",
  alignItems: "center",
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  borderRadius: 0,
  backdropFilter: "blur(12px)",
  padding: "10px 15px",
  "& h6": {
    fontWeight: 800,
  },
});

export const HeaderButton = styled(IconButton)<IconButtonProps>({
  marginRight: 20,
});

export const InnerContainer = styled(Paper)({
  backgroundColor: "#F5F8FA",
  borderRadius: 15,
  marginTop: 20,

  "& .MuiList-root": {
    paddingTop: 0,
  },
});

export const RecommendedHeader = styled(Paper)({
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  backgroundColor: "transparent",
  padding: "13px 18px",

  "& h5": {
    fontWeight: 700,
  },
});

export const RecommendedItem = styled(ListItem)({
  cursor: "pointer",

  "& .MuiTypography-body1": {
    fontWeight: 700,
  },
  "& .MuiListItemAvatar-root": {
    margin: 0,
  },
  "& .MuiListItemText-root": {
    margin: 0,
  },
  "& a": {
    color: "inherit",
    textDecoration: "none",
  },
  "&:hover": {
    backgroundColor: "#edf3f6",
  },
});
