import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
// local libs
import { Header } from "../../generic/Header/Header";
import { useAppDispatch } from "../../redux/store";
import { fetchUserData } from "../../redux/user/asyncActions";
import { useSelector } from "react-redux";
import { selectSelectedUserData } from "../../redux/user/selectors";
import { setUserData } from "../../redux/user/slice";

export const Profile: React.FC = () => {
  const { email } = useParams();
  const dispatch = useAppDispatch();
  const user = useSelector(selectSelectedUserData);
  const { t } = useTranslation();

  useEffect(() => {
    if (email) {
      dispatch(fetchUserData(email));
    }
    return () => {
      dispatch(setUserData(undefined));
    };
  }, [dispatch, email]);

  if (email && user) {
    return <Header variant="outlined" title={user?.fullname} t={t} icon />;
  }

  return null;
};
