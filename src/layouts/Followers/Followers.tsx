import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
// local libs
import { Header } from "../../generic/Header/Header";
import { selectSelectedUserData } from "../../redux/user/selectors";
import { useAppDispatch } from "../../redux/store";
import { fetchUserData } from "../../redux/user/asyncActions";
import { setUserData } from "../../redux/user/slice";
import { getTitles } from "../fixtures";

export const Followers: React.FC = () => {
  const { email } = useParams();
  const { t } = useTranslation();
  const user = useSelector(selectSelectedUserData);
  const dispatch = useAppDispatch();
  const titles = getTitles(t, email);

  useEffect(() => {
    if (email) dispatch(fetchUserData(email));

    return () => {
      dispatch(setUserData(undefined));
    };
    // eslint-disable-next-line
  }, [email]);

  if (user)
    return (
      <Header
        title={user.fullname}
        secondText={`@${user.username}`}
        titles={titles.followers.sections}
        t={t}
        icon
        variant="outlined"
      />
    );
  return null;
};
