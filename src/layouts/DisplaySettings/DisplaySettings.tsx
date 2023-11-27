import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
// local libs
import { useColorMode } from "../../ColorModeContext";
import { Header } from "../../generic/Header/Header";
import { ThemeButton } from "../../generic/ThemeButton/ThemeButton";
import { getTitles } from "../../utils/getTitles";
import { getDisplayDescription } from "../../utils/getDisplayDescription";
import { getButtonLabels } from "./fixtures";
// styles
import { ButtonContainer } from "./styles";
import { HeaderDescription } from "../../styles";

export const DisplaySettings: React.FC = () => {
  const { palette } = useTheme();
  const colorMode = useColorMode();

  const [value, setValue] = useState<string>(palette.mode);
  const { t } = useTranslation();

  const { display, background } = getTitles(t);
  const description = getDisplayDescription(t);
  const buttonLabels = getButtonLabels(t);

  const handleChangeTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    colorMode.changeColorMode(e.currentTarget.value);
    setValue(e.currentTarget.value);
  };

  return (
    <>
      <Header variant="elevation" title={display} t={t} icon />
      <HeaderDescription>{description}</HeaderDescription>
      <Header variant="elevation" title={background} t={t} />
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
