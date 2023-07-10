import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Checkbox from "@mui/material/Checkbox";
// local libs
import { Header } from "../../generic/Header/Header";
import { getLanguagesDescriptions, getTitles } from "../fixtures";
import { labels } from "./fixtures";
// styles
import { LanguagesContainer, LanguageControlLabel } from "./styles";
import { HeaderDescription } from "../../styles";

export const LanguagesSettings: React.FC = () => {
  const [language, setLanguage] = useState<string | null>("Russian");
  const { t } = useTranslation();

  const titles = getTitles(t);
  const descriptions = getLanguagesDescriptions(t);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(e.currentTarget.ariaLabel);
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
              checked={language === "Russian"}
              onChange={handleChange}
              inputProps={{ "aria-label": "Russian" }}
            />
          }
          label={labels.russian}
        />
        <LanguageControlLabel
          control={
            <Checkbox
              checked={language === "English"}
              onChange={handleChange}
              inputProps={{ "aria-label": "English" }}
            />
          }
          label={labels.english}
        />
      </LanguagesContainer>
    </>
  );
};
