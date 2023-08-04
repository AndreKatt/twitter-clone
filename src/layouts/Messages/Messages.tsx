import React from "react";
import { useTranslation } from "react-i18next";
// local libs
import { Header } from "../../generic/Header/Header";
import { getTitles } from "../fixtures";

export const Messages: React.FC = () => {
  const { t } = useTranslation();
  const { messages } = getTitles(t);

  return <Header variant="elevation" title={messages} t={t} />;
};
