import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../../generic/Header/Header";
import { getTitles } from "../fixtures";

export const Notifications: React.FC = () => {
  const { t } = useTranslation();
  const titles = getTitles(t).notifications;

  return (
    <Header
      variant="outlined"
      title={titles.main}
      titles={titles.sections}
      t={t}
    />
  );
};
