import { styled } from "@mui/system";
import Button from "@mui/material/Button";
// types
import type { ButtonProps } from "@mui/material/Button";
import { FollowButtonProps } from "./types";

export const StyledButton = styled(Button)<ButtonProps & FollowButtonProps>(
  ({ theme, width = "auto", height }) => ({
    width: width,
    height: height,
    color: theme.palette.background.default,
    fontSize: 15,
    backgroundColor: theme.palette.text.primary,
    paddingBottom: 7,

    "&:hover": {
      backgroundColor: theme.palette.text.primary,
      filter: "opacity(0.9)",
    },
  })
);
