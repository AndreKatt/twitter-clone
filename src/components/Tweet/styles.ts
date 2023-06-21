import { styled } from "@mui/system";
import Paper, { PaperProps } from "@mui/material/Paper";
import Popper, { PopperProps } from "@mui/material/Popper";
import ListItemText from "@mui/material/ListItemText";

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

export const HeaderContainer = styled("div")({
  display: "grid",
  paddingTop: 5,
  gridTemplateColumns: "auto 1fr",

  "@media (max-width: 1150px)": {
    gridTemplateColumns: "auto 41vw",
  },
  "@media (max-width: 1024px)": {
    gridTemplateColumns: "auto 37vw",
  },
  "@media (max-width: 1000px)": {
    gridTemplateColumns: "auto 43vw",
  },
  "@media (max-width: 960px)": {
    gridTemplateColumns: "auto 57vw",
  },
  "@media (max-width: 923px)": {
    gridTemplateColumns: "auto 56vw",
  },
  "@media (max-width: 680px)": {
    gridTemplateColumns: "auto 52vw",
  },
});

export const HeaderTextContainer = styled("div")({
  flex: 1,
  display: "flex",
  justifyContent: "space-between",
});

export const FooterWrapper = styled("div")({
  display: "grid",
  position: "relative",
  left: -13,
  width: 450,
  gridTemplateColumns: "6vw 6vw 6vw 6vw",

  "@media (max-width: 2040px)": {
    width: 430,
    gridTemplateColumns: "7vw 7vw 7vw 7vw",
  },
  "@media (max-width: 1700px)": {
    width: 430,
    gridTemplateColumns: "9vw 9vw 9vw 9vw",
  },
  "@media (max-width: 1476px)": {
    gridTemplateColumns: "10vw 10vw 10vw 10vw",
  },
  "@media (max-width: 959px)": {
    gridTemplateColumns: "13vw 13vw 13vw 13vw",
  },
});

export const FooterContainer = styled(Paper)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "inherit",
});

export const MenuButtonContainer = styled("div")({
  position: "absolute",
  right: 0,
  top: 0,
});

export const DeleteMenuText = styled(ListItemText)({
  color: "red",
});

export const TweetPopper = styled(Popper)<PopperProps>({
  borderRadius: 12,
  boxShadow:
    "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
  inset: "0px 1vw auto auto !important",
  zIndex: 2,
});
