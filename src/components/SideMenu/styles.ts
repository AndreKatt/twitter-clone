import { styled } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Button, { ButtonProps } from "@mui/material/Button";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";

export const SideMenuList = styled("ul")({
  position: "sticky",
  top: 0,
  listStyle: "none",
  marginTop: 0,
  maxWidth: 230,
  alignSelf: "start",
  "& a": {
    textDecoration: "none",
    color: "inherit",
  },
});

export const SideMenuListItem = styled("li")(({ theme }) => ({
  position: "relative",
  cursor: "pointer",

  "&:hover": {
    "& div": {
      backgroundColor: "rgba(29, 161, 242, 0.1)",
      "& h6": {
        color: theme.palette.primary.main,
      },
      "& svg path": {
        fill: theme.palette.primary.main,
      },
    },
  },
  "& div": {
    width: 50,
    height: 50,
    display: "inline-flex",
    alignItems: "center",
    position: "relative",
    borderRadius: 30,
    marginBottom: 15,
    transition: "background-color 0.1s ease-in-out",

    "@media(max-height: 790px)": {
      marginBottom: 5,
    },
    "@media(max-height: 700px)": {
      marginBottom: 0,
    },
  },
}));

export const ListItemWrapper = styled("div")({
  width: 0,

  "& svg": {
    fontSize: "28px !important",
    marginLeft: 12,
  },
});

export const LogoIconButton = styled(IconButton)<IconButtonProps>({
  margin: " 2px 0 12px",
});

export const LogoIcon = styled(TwitterIcon)({
  fontSize: "32px",
});

export const Label = styled(Typography)<TypographyProps>({
  fontWeight: 400,
  fontSize: 20,
  marginLeft: 15,
  whiteSpace: "nowrap",

  "@media(max-width: 1199px)": {
    display: "none",
  },
});

export const AddTweetButton = styled(Button)<ButtonProps>(({ theme }) => ({
  padding: theme.spacing(3.2),
  marginTop: theme.spacing(2),
  width: 220,

  "@media(max-width: 1199px)": {
    width: 51,
    borderRadius: "50%",

    "& span": {
      display: "none",
    },
  },
}));

export const ButtonIcon = styled(BorderColorTwoToneIcon)({
  width: 20,
  display: "none",
  color: "white",

  "@media(max-width: 1199px)": {
    display: "flex",
  },
});
