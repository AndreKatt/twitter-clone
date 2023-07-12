import { styled } from "@mui/system";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Button, { ButtonProps } from "@mui/material/Button";

export const ListItemsWrapper = styled(List)({
  paddingBottom: 0,
});

export const RecommendedItem = styled(ListItem)(({ theme }) => ({
  cursor: "pointer",

  "& .MuiTypography-body1": {
    fontWeight: 700,
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
  fontSize: 14,
  backgroundColor: theme.palette.text.primary,
  paddingBottom: 7,

  "&:hover": {
    backgroundColor: "rgb(39, 44, 48)",
  },
}));
