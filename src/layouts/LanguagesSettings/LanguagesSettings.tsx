import React from "react";
import { Header } from "../../generic/Header/Header";
import { titles } from "../fixtures";

export const LanguagesSettings: React.FC = () => {
  return <Header variant="elevation" title={titles.languages.main} icon />;
};
