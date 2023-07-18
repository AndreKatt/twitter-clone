import { styled } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Popper, { PopperProps } from "@mui/material/Popper";
import Grow, { GrowProps } from "@mui/material/Grow";
import { colors } from "@mui/material";

export const ProfileContainer = styled("div")(({ theme }) => ({
  height: "60px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  position: "fixed",
  borderRadius: "40px",
  bottom: 10,
  marginLeft: "-245px",
  cursor: "pointer",
  transition: "background-color 0.2s",

  "&:hover": {
    backgroundColor: theme.palette.neutral.main,
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
  },
  "@media(max-width: 1199px)": {
    width: "60px",
    marginLeft: "-58px",
  },
}));

export const TextContainer = styled("div")({
  display: "block",
  paddingLeft: "10px",

  "@media(max-width: 1199px)": {
    display: "none",
  },
});

export const ProfileAvatar = styled(Avatar)({
  width: "40px",
  height: "40px",
  marginLeft: "12px",
});

export const Button = styled(IconButton)({
  display: "block",
  padding: "8px 10px 6px 10px",

  "@media(max-width: 1199px)": {
    display: "none !important",
  },
});

export const Fullname = styled(Typography)({
  fontSize: "15px",
});

export const Username = styled(Typography)({
  color: colors.grey[500],
  fontSize: "15px",
});

export const MenuPopper = styled(Popper)<PopperProps>({
  borderRadius: 12,
  inset: "auto 1vw 0px auto !important",
  boxShadow:
    "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
});

export const StyledGrow = styled(Grow)<GrowProps>({
  transformOrigin: "right bottom",
});

export const LogOutLink = styled(Link)({
  color: "inherit",
  textDecoration: "none",
});
