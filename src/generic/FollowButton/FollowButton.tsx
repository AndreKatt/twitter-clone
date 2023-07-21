import React from "react";
import { ButtonProps } from "@mui/material/Button";
// styles
import { StyledButton } from "./styles";
// types
import { FollowButtonProps } from "./types";

export const FollowButton: React.FC<FollowButtonProps & ButtonProps> = ({
  width,
  height,
  children,
}) => {
  return (
    <StyledButton className="followButton" width={width} height={height}>
      {children}
    </StyledButton>
  );
};
