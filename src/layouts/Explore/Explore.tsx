import React from "react";
import { useTranslation } from "react-i18next";
// local libs
import { Header } from "../../generic/Header/Header";
import { getTitles } from "../fixtures";

export const Explore: React.FC = () => {
  const { t } = useTranslation();
  const { explore } = getTitles(t);

  return <Header variant="elevation" searchField title={explore} t={t} />;
};
