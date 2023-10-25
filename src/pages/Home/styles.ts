import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// types
import { PaperProps } from "@mui/material/Paper";
import { GridProps } from "@mui/material/Grid";

export const GridContainer = styled(Grid)<GridProps>({
  flexWrap: "nowrap",
});

export const MenuGrid = styled(Grid)<GridProps>({
  "& .sideProfileContainer": {
    "@media(max-height: 465px)": {
      display: "none",
    },
  },
  "@media(max-height: 1240px)": {
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: 15,
  },
});

export const RightSideContainer = styled("div")({
  position: "sticky",
});

export const TweetsContainer = styled(Paper)<PaperProps>({
  borderRadius: 0,
  height: "100%",
  borderTop: 0,
  borderBottom: 0,
});

export const RightSideGrid = styled(Grid)<GridProps>({
  "@media(max-width: 899px)": {
    display: "none",
  },
});
