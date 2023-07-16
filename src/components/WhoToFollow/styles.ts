import { styled } from "@mui/system";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

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
