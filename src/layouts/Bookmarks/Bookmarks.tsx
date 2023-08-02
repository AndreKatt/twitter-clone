import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
// local libs
import { Header } from "../../generic/Header/Header";
import { selectCurrentUserData } from "../../redux/currentUser/selectors";
import { getTitles } from "../fixtures";

export const Bookmarks: React.FC = () => {
  const { t } = useTranslation();
  const title = getTitles(t).bookmarks.main;
  const user = useSelector(selectCurrentUserData);

  return (
    <Header
      variant="elevation"
      title={title}
      secondText={`@${user?.username}`}
      t={t}
    />
  );
};
