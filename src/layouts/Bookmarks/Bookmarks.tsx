import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../../generic/Header/Header";
import { getTitles } from "../fixtures";

export const Bookmarks: React.FC = () => {
  const { t } = useTranslation();
  const title = getTitles(t).bookmarks.main;

  return <Header variant="elevation" title={title} t={t} />;
};
