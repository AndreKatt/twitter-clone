import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import Button, { ButtonProps } from "@mui/material/Button";
import Typography, { TypographyProps } from "@mui/material/Typography";

export const RecommendedHeader = styled(Paper)({
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  backgroundColor: "transparent",
  padding: "13px 18px",

  "& h5": {
    fontWeight: 700,
  },
});

export const RecommendedItem = styled(ListItem)(({ theme }) => ({
  cursor: "pointer",

  "& .MuiTypography-body1": {
    fontWeight: 700,
  },
  "& .MuiListItemAvatar-root": {
    margin: 0,
  },
  "& .MuiListItemText-root": {
    margin: 0,
  },
  "& a": {
    color: "inherit",
    textDecoration: "none",
  },
  "&:hover": {
    backgroundColor: theme.palette.neutral.light,
  },
}));

export const FollowButton = styled(Button)<ButtonProps>(({ theme }) => ({
  height: 32,
  color: theme.palette.background.default,
  backgroundColor: theme.palette.text.primary,
  paddingBottom: 9,
  "&:hover": {
    backgroundColor: theme.palette.text.primary,
  },
}));

export const More = styled(Typography)<TypographyProps>({
  padding: "13px 18px",
});
