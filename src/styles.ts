import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import TextField from "@mui/material/TextField";
// types
import type { LinkProps } from "react-router-dom";
import type { AvatarProps } from "@mui/material/Avatar";
import type { TypographyProps } from "@mui/material/Typography";
import type { TextFieldProps } from "@mui/material/TextField";

export const LogoIcon = styled(TwitterIcon)({
  height: "8%",
  width: "8%",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
});

export const StyledLink = styled(Link)<LinkProps>({
  width: "100%",
  color: "inherit",
  textDecoration: "none",
});

export const TextContentContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingLeft: 15,
  paddingRight: 35,
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

export const HeaderSection = styled("div")({
  width: "100%",
  height: 53,
  backgroundColor: "transparent",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "stretch",
});

export const UserAvatar = styled(Avatar)<AvatarProps>({
  width: 40,
  height: 40,
  cursor: "pointer",
  transition: "filter 0.2s ",

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

export const InnerContainer = styled("div")(({ theme }) => ({
  maxWidth: 400,
  backgroundColor: theme.palette.neutral.main,
  backgroundImage:
    "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
  borderRadius: 15,
  margin: "20px 0",

  "& .MuiList-root": {
    paddingTop: 0,
  },
}));

export const HeaderDescription = styled("div")({
  fontSize: 14,
  color: grey[500],
  padding: "10px 15px",
});

export const RightSideBlockHeader = styled("div")({
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  backgroundColor: "transparent",
  padding: "13px 18px",

  "& h5": {
    fontWeight: 700,
  },
});

export const More = styled(Typography)<TypographyProps>(({ theme }) => ({
  borderBottomRightRadius: 15,
  borderBottomLeftRadius: 15,
  padding: "15px 18px",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: theme.palette.neutral.light,
  },
}));

export const InputField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  marginBottom: theme.spacing(5),
}));
