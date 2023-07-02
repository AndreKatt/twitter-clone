import React from "react";
import { Header } from "../../generic/Header/Header";
import { titles } from "../fixtures";
import { ThemeButton } from "../../generic/ThemeButton/ThemeButton";

export const DisplaySettings: React.FC = () => {
  return (
    <>
      <Header variant="elevation" title={titles.display.main} icon />
      <Header variant="elevation" title={titles.background.main} />
      <ThemeButton themeColor="light" title="По умолчанию" />
      <ThemeButton themeColor="dark" title="Сумерки" />
    </>
  );
};
