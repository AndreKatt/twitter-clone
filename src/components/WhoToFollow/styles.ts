import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";

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

export const RecommendedItem = styled(ListItem)({
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
    backgroundColor: "#edf3f6",
  },
});
