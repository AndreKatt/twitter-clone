import React from "react";
import { StyledButtonWithProps } from "./styles";
import { StyledButtonProps } from "./types";

export const ThemeButton: React.FC<StyledButtonProps> = ({
  title,
  themeColor,
}) => {
  return (
    <StyledButtonWithProps
      title={title}
      themeColor={themeColor}
      variant="contained"
    >
      {title}
    </StyledButtonWithProps>
  );
};
