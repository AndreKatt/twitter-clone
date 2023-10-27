import { styled } from "@mui/system";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
// types
import type { ListItemTextProps } from "@mui/material/ListItemText";

export const ListItemsWrapper = styled(List)({
  paddingBottom: 0,
});

export const RecommendedItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
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

export const UserInfoText = styled(ListItemText)<ListItemTextProps>({
  wordBreak: "break-word",
  paddingRight: 10,
});

export const UserInfoContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});
