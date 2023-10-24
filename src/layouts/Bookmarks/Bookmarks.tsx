import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
// local libs
import { Header } from "../../generic/Header/Header";
import { selectCurrentUserData } from "../../redux/currentUser/selectors";
import { getTitles } from "../../utils/getTitles";

export const Bookmarks: React.FC = () => {
  const { t } = useTranslation();
  const { bookmarks } = getTitles(t);
  const user = useSelector(selectCurrentUserData);

  return (
    <Header
      variant="elevation"
      title={bookmarks}
      secondText={`@${user?.username}`}
      t={t}
    />
  );
};
