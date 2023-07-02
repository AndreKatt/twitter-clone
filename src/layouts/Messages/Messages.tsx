import React from "react";
import { Header } from "../../generic/Header/Header";
import { titles } from "../fixtures";

export const Messages: React.FC = () => {
  return <Header variant="elevation" title={titles.messages.main} />;
};
