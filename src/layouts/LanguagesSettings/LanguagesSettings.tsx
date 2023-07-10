import React, { useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Checkbox from "@mui/material/Checkbox";
// local libs
import { Header } from "../../generic/Header/Header";
import { getLanguagesDescriptions, getTitles } from "../fixtures";
import { getButtonLabels } from "./fixtures";
// styles
import { LanguagesContainer, LanguageControlLabel } from "./styles";
import { HeaderDescription } from "../../styles";

export const LanguagesSettings: React.FC = () => {
  const [language, setLanguage] = useState<string | null>(i18next.language);
  const { t } = useTranslation();

  const titles = getTitles(t);
  const descriptions = getLanguagesDescriptions(t);
  const buttonLabels = getButtonLabels(t);

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lang = e.currentTarget.ariaLabel;

    if (lang) {
      i18next.changeLanguage(lang);
    }
    setLanguage(lang);
  };

  return (
    <>
      <Header variant="elevation" title={titles.languages.main} t={t} icon />
      <HeaderDescription>{descriptions.languages}</HeaderDescription>

      <Header variant="elevation" title={titles.displayLaguage.main} t={t} />
      <HeaderDescription>{descriptions.displayLaguage}</HeaderDescription>

      <LanguagesContainer>
        <LanguageControlLabel
          control={
            <Checkbox
              checked={language === "ru"}
              onChange={handleChangeLanguage}
              inputProps={{ "aria-label": "ru" }}
            />
          }
          label={buttonLabels.russian}
        />
        <LanguageControlLabel
          control={
            <Checkbox
              checked={language === "en"}
              onChange={handleChangeLanguage}
              inputProps={{ "aria-label": "en" }}
            />
          }
          label={buttonLabels.english}
        />
      </LanguagesContainer>
    </>
  );
};
