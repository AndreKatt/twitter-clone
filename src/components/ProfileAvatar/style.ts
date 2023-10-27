import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

export const AvatarWrapper = styled(Paper)({
  position: "relative",
  width: 143,
  height: 143,
  borderRadius: "50%",
  margin: "-110px 0 12px 17px",
  cursor: "pointer",
});

export const StyledProfileAvatar = styled(Avatar)({
  position: "absolute",
  width: 133,
  height: 133,
  fontSize: 70,
  fontWeight: 600,
  top: 5,
  left: 5,
  paddingBottom: 10,
  cursor: "pointer",
  transition: "filter 0.2s ",

  "& img": {
    height: "117%",
  },
  "&:hover": {
    filter: "brightness(0.8)",
  },
});
