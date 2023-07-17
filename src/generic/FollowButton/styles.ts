import { styled } from "@mui/system";
import Button, { ButtonProps } from "@mui/material/Button";
import { FollowButtonProps } from "./types";

export const StyledButton = styled(Button)<ButtonProps & FollowButtonProps>(
  ({ theme, width, height }) => ({
    width: width ? width : "auto",
    height: height,
    color: theme.palette.background.default,
    fontSize: 14,
    backgroundColor: theme.palette.text.primary,
    paddingBottom: 7,

    "&:hover": {
      backgroundColor: theme.palette.text.primary,
      filter: "opacity(0.9)",
    },
  })
);
