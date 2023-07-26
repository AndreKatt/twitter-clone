import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../../generic/Header/Header";
import { getTitles } from "../fixtures";
import { useSelector } from "react-redux";
import { selectCurrentUserData } from "../../redux/currentUser/selectors";

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
