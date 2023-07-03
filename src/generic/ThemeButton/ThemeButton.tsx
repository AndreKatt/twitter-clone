import React from "react";
import { CheckRadio, Label, StyledButtonWithProps } from "./styles";
import { StyledButtonProps } from "./types";

export const ThemeButton: React.FC<StyledButtonProps> = ({
  title,
  themecolor,
  onClick,
  checked,
  value,
}) => {
  return (
    <StyledButtonWithProps
      onClick={onClick}
      checked={checked}
      value={value}
      title={title}
      themecolor={themecolor}
      variant="contained"
    >
      <CheckRadio onClick={onClick} checked={checked} value={value} />
      <Label>{title}</Label>
    </StyledButtonWithProps>
  );
};
