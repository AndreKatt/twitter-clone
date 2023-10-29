import { styled } from "@mui/system";
import Popper from "@mui/material/Popper";
import ListItemText from "@mui/material/ListItemText";
import Grow from "@mui/material/Grow";
// types
import type { PopperProps } from "@mui/material/Popper";
import type { GrowProps } from "@mui/material/Grow";

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

export const StyledGrow = styled(Grow)<GrowProps>({
  transformOrigin: "right top",
});
