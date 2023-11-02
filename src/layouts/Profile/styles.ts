import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
// types
import type { ProfileImageProps } from "./types";

export const ProfileImage = styled("div")<ProfileImageProps>(
  ({ theme, url }) => ({
    height: 200,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${url})`,
    backgroundColor: theme.palette.neutral.dark,
    borderRadius: 0,
    cursor: "pointer",
  })
);

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
