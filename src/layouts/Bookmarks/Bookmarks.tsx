import React from "react";
import { Header } from "../../generic/Header/Header";
import { titles } from "../fixtures";

export const Bookmarks: React.FC = () => {
  return <Header variant="elevation" title={titles.bookmarks.main} />;
};
