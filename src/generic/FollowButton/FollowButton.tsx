import React from "react";
import { ButtonProps } from "@mui/material/Button";
import { StyledButton } from "./styles";
import { FollowButtonProps } from "./types";

export const FollowButton: React.FC<FollowButtonProps & ButtonProps> = ({
  width,
  height,
  children,
}) => {
  return (
    <StyledButton width={width} height={height}>
      {children}
    </StyledButton>
  );
};
