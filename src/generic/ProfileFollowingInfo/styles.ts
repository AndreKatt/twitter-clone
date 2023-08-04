import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

export const Count = styled("span")(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const FollowInfo = styled(Typography)({
  color: grey[500],
  marginRight: 16,
  cursor: "pointer",

  "&:hover": {
    textDecoration: "underline",
  },
});
