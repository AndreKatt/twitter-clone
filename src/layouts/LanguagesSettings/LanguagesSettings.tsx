import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
// local libs
import { Header } from "../../generic/Header/Header";
import { languagesDescriptions, titles } from "../fixtures";
import { labels } from "./fixtures";
// styles
import { LanguagesContainer, LanguageControlLabel } from "./styles";
import { HeaderDescription } from "../../styles";

export const LanguagesSettings: React.FC = () => {
  const [language, setLanguage] = useState<string | null>("Russian");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(e.currentTarget.ariaLabel);
  };

  return (
    <>
      <Header variant="elevation" title={titles.languages.main} icon />
      <HeaderDescription>{languagesDescriptions.languages}</HeaderDescription>

      <Header variant="elevation" title={titles.displayLaguage.main} />
      <HeaderDescription>
        {languagesDescriptions.displayLaguage}
      </HeaderDescription>

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
