import { styled } from "@mui/system";
import Paper, { PaperProps } from "@mui/material/Paper";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Grid, { GridProps } from "@mui/material/Grid";

export const MenuGrid = styled(Grid)<GridProps>({
  "& .sideProfileContainer": {
    "@media(max-height: 655px)": {
      display: "none",
    },
  },
  "@media(max-height: 1240px)": {
    display: "flex",
    justifyContent: "flex-end",
  },
});

export const AddTweetWrapper = styled("div")({
  padding: 20,
});

export const AddTweetBottomLine = styled("div")(({ theme }) => ({
  height: 12,
  backgroundColor: theme.palette.neutral.light,
}));

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
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "column",
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  borderRadius: 0,
  backdropFilter: "blur(15px)",
  cursor: "pointer",

  "& h6": {
    fontWeight: 800,
  },
});

export const HeaderTitleContainer = styled(Paper)(({ theme }) => ({
  height: 53,
  backgroundColor: "transparent",
  // backgroundColor: theme.palette.neutral.main,

  display: "flex",
  alignItems: "center",
  paddingLeft: 15,
}));

export const HeaderButton = styled(IconButton)<IconButtonProps>({
  marginRight: 20,
});

export const RightSideGrid = styled(Grid)<GridProps>({
  "@media(max-width: 899px)": {
    display: "none",
  },
});
