import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../../generic/Header/Header";
import { getTitles } from "../fixtures";

export const Explore: React.FC = () => {
  const { t } = useTranslation();
  const title = getTitles(t).explore.main;

  return <Header variant="elevation" searchField title={title} t={t} />;
};
