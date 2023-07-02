import React from "react";
import { Header } from "../../generic/Header/Header";
import { titles } from "../fixtures";

export const Settings: React.FC = () => {
  return <Header variant="elevation" title={titles.settings.main} />;
};
