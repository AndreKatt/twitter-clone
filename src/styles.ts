import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";
import Avatar, { AvatarProps } from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";

export const LogoIcon = styled(TwitterIcon)({
  height: "8%",
  width: "8%",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
});

export const SpinnerWrapper = styled("div")({
  textAlign: "center",
  paddingTop: 50,
  paddingBottom: 50,
});

export const TextContentContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingLeft: 15,
  paddingRight: 35,
  "& a": {
    color: "inherit",
    textDecoration: "none",
  },
});

export const TextContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

  "& p": {
    display: "flex",
    flexWrap: "wrap",
  },
});

export const HeaderText = styled("span")({
  color: grey[500],
});

export const HeaderSection = styled(Paper)({
  width: "100%",
  height: 53,
  backgroundColor: "transparent",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "stretch",
});

export const TweetAvatar = styled(Avatar)<AvatarProps>(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  cursor: "pointer",
  transition: "filter 0.2s ",
  "&:hover": {
    filter: "brightness(0.8)",
  },
}));

export const FooterIcon = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  "&:hover": {
    "& svg path": {
      fill: theme.palette.primary.main,
    },
  },
}));

export const InnerContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.neutral.main,
  backgroundImage:
    "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
  borderRadius: 15,
  marginTop: 20,

  "& .MuiList-root": {
    paddingTop: 0,
  },
}));
