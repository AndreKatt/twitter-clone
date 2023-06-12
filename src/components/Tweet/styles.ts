import { styled } from "@mui/system";
import Paper, { PaperProps } from "@mui/material/Paper";

export const TweetContainer = styled(Paper)<PaperProps>({
  position: "relative",
  justifyContent: "space-between",
  padding: "10px 0 2px 0",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  paddingTop: 15,
  paddingLeft: 20,
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",

  "&:hover": {
    backgroundColor: "rgb(245, 248, 250)",
  },
});

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

export const FooterContainer = styled("div")({
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

export const MenuButtonContainer = styled("div")({
  position: "absolute",
  right: 0,
  top: 0,
});
