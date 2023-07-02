import React from "react";
import { Header } from "../../generic/Header/Header";
import { titles } from "../fixtures";

export const Explore: React.FC = () => {
  return <Header variant="elevation" searchField title={titles.explore.main} />;
};
