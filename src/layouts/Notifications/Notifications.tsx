import React from "react";
import { Header } from "../../generic/Header/Header";
import { titles } from "../fixtures";

export const Notifications: React.FC = () => {
  return (
    <Header
      variant="outlined"
      title={titles.notifications.main}
      titles={titles.notifications.sections}
    />
  );
};
