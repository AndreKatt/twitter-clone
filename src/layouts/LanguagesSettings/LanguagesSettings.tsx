import React, { useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Checkbox from "@mui/material/Checkbox";
// local libs
import { Header } from "../../generic/Header/Header";
import { getTitles } from "../../utils/getTitles";
import { getLanguagesDescriptions } from "../../utils/getLanguagesDescriptions";
import { getButtonLabels } from "./fixtures";
// styles
import { LanguagesContainer, LanguageControlLabel } from "./styles";
import { HeaderDescription } from "../../styles";

export const LanguagesSettings: React.FC = () => {
  const [language, setLanguage] = useState<string | null>(i18next.language);
  const { t } = useTranslation();

  const { languages, displayLaguage } = getTitles(t);
  const { languagesText, displayLaguageText } = getLanguagesDescriptions(t);
  const { russian, english } = getButtonLabels(t);

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lang = e.currentTarget.ariaLabel;

    if (lang) {
      i18next.changeLanguage(lang);
    }
    setLanguage(lang);
  };

  return (
    <>
      <Header variant="elevation" title={languages} t={t} icon />
      <HeaderDescription>{languagesText}</HeaderDescription>

      <Header variant="elevation" title={displayLaguage} t={t} />
      <HeaderDescription>{displayLaguageText}</HeaderDescription>

      <LanguagesContainer>
        <LanguageControlLabel
          control={
            <Checkbox
              checked={language === "ru"}
              onChange={handleChangeLanguage}
              inputProps={{ "aria-label": "ru" }}
            />
          }
          label={russian}
        />
        <LanguageControlLabel
          control={
            <Checkbox
              checked={language === "en"}
              onChange={handleChangeLanguage}
              inputProps={{ "aria-label": "en" }}
            />
          }
          label={english}
        />
      </LanguagesContainer>
    </>
  );
};
