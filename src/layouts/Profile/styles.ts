import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

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
  margin: "-110px 0 12px 17px",
  cursor: "pointer",
});

export const ProfileAvatar = styled(Avatar)({
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

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: 36,
  height: 36,
  border: `1px solid ${theme.palette.neutral.dark}`,
  marginRight: 8,
}));

export const MailIcon = styled(EmailOutlinedIcon)(({ theme }) => ({
  fontSize: 20,
  color: theme.palette.text.primary,
}));

export const ProfileButtonsContainer = styled("div")({
  display: "flex",
  justifyContent: "end",
  padding: "12px 17px",
});

export const UserInfoContainer = styled("div")({
  paddingBottom: 20,
  paddingLeft: 17,
});

export const Fullname = styled(Typography)({
  fontSize: 20,
  fontWeight: 900,
});

export const Username = styled(Typography)({
  color: grey[500],
  fontSize: 15,
  paddingBottom: 20,
});

export const RegistrationData = styled(Typography)({
  color: grey[500],
  fontSize: 15,
  display: "flex",
  alignItems: "center",
  marginBottom: 12,
});

export const CalendarIcon = styled(DateRangeOutlinedIcon)({
  fontSize: 18,
  margin: "0 8px 3px 0",
});

export const FollowInfoContainer = styled("div")({
  display: "flex",
});
