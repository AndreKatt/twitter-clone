import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
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
  margin: "-71px 0 12px 17px",
  cursor: "pointer",
});

export const ProfileAvatar = styled(Avatar)({
  position: "absolute",
  // display: "flex",
  width: 133,
  height: 133,
  fontSize: 70,
  fontWeight: 600,
  top: 5,
  left: 5,
  paddingBottom: 10,
});

export const UserInfoContainer = styled(Paper)({
  paddingBottom: 20,
  marginLeft: 17,
});

export const Fullname = styled(Typography)({
  fontSize: 20,
  fontWeight: 900,
});

export const Username = styled(Typography)({
  color: grey[600],
  fontSize: 15,
  paddingBottom: 20,
});

export const RegistrationData = styled(Typography)({
  color: grey[600],
  fontSize: 15,
  display: "flex",
  alignItems: "center",
  marginButtom: 12,
});

export const CalendarIcon = styled(DateRangeOutlinedIcon)({
  fontSize: 18,
  margin: "0 8px 3px 0",
});
