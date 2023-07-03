import React from "react";

export type StyledButtonProps = {
  title: string;
  themecolor: "light" | "dark";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  checked: boolean | undefined;
  value: string;
};
