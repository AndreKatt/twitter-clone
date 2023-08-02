import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ListItemText from "@mui/material/ListItemText";
// types
import type { PaperProps } from "@mui/material/Paper";
import type { PopperProps } from "@mui/material/Popper";
import type { GrowProps } from "@mui/material/Grow";

export const TweetContainer = styled(Paper)<PaperProps>(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  borderTop: 0,
  borderRight: 0,
  borderLeft: 0,
  borderRadius: 0,
  padding: "10px 0 2px 0",
  flexDirection: "row",
  paddingTop: 15,
  paddingLeft: 20,
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",

  "&:hover": {
    backgroundColor: theme.palette.neutral.light,
  },
}));

export const HeaderContainer = styled("div")({
  width: "100%",
  display: "grid",
  paddingTop: 5,
  gridTemplateColumns: "auto 1fr",
});

export const HeaderTextContainer = styled("div")({
  flex: 1,
  display: "flex",
  justifyContent: "space-between",
});

export const MenuButtonContainer = styled("div")({
  position: "absolute",
  right: 0,
  top: 0,
});

export const DeleteMenuText = styled(ListItemText)({
  color: "red",
});

export const TweetPopper = styled(Popper)<PopperProps>({
  borderRadius: 12,
  boxShadow:
    "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
  inset: "0px 1vw auto auto !important",
  zIndex: 2,
});

export const DeleteIcon = styled(DeleteOutlinedIcon)({
  color: "red",
});

export const StyledGrow = styled(Grow)<GrowProps>({
  transformOrigin: "right top",
});
