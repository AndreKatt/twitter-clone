import React from "react";
import { useTranslation } from "react-i18next";
// local libs
import { Header } from "../../generic/Header/Header";
import { getTitles } from "../../utils/getTitles";

export const Notifications: React.FC = () => {
  const { t } = useTranslation();
  const { notifications } = getTitles(t);

  return (
    <Header
      variant="outlined"
      title={notifications}
      // titles={titles.sections}
      t={t}
    />
  );
};
