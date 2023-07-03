import React, { useContext, useState } from "react";
import { useTheme } from "@mui/material/styles";
// local libs
import { ColorModeContext } from "../../App";
import { Header } from "../../generic/Header/Header";
import { ThemeButton } from "../../generic/ThemeButton/ThemeButton";
import { displayDescription, titles } from "../fixtures";
import { buttonLabels } from "./fixtures";
// styles
import { ButtonContainer } from "./styles";
import { HeaderDescription } from "../../styles";

export const DisplaySettings: React.FC = () => {
  const { palette } = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [value, setValue] = useState<string>(palette.mode);

  const handleChangeTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    colorMode.changeColorMode(e.currentTarget.value);
    setValue(e.currentTarget.value);
  };

  return (
    <>
      <Header variant="elevation" title={titles.display.main} icon />
      <HeaderDescription>{displayDescription}</HeaderDescription>
      <Header variant="elevation" title={titles.background.main} />
      <ButtonContainer>
        <ThemeButton
          checked={value === "light"}
          onClick={handleChangeTheme}
          value="light"
          themecolor="light"
          title={buttonLabels.light}
        />
        <ThemeButton
          checked={value === "dark"}
          onClick={handleChangeTheme}
          value="dark"
          themecolor="dark"
          title={buttonLabels.dark}
        />
      </ButtonContainer>
    </>
  );
};
