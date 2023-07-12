import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

export const ProfileImage = styled(Paper)(({ theme }) => ({
  height: 200,
  backgroundColor: theme.palette.neutral.dark,
  borderRadius: 0,
}));

export const AvatarWrapper = styled(Paper)({
  position: "relative",
  width: 143,
  height: 143,
  borderRadius: "50%",
  margin: "-14% 0 12px 17px",
  cursor: "pointer",
});

export const ProfileAvatar = styled(Avatar)({
  position: "absolute",
  width: 133,
  height: 133,
  top: 5,
  left: 5,
});
