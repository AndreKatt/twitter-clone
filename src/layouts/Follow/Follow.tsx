import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// local libs
import { Header } from "../../generic/Header/Header";
import { UserInfoBlock } from "../../components/UserInfoBlock/UserInfoBlock";
import { useAppDispatch } from "../../redux/store";
import { fetchUserData } from "../../redux/user/asyncActions";
import { selectSelectedUserData } from "../../redux/user/selectors";
import { getSections } from "../../utils/getSections";
// types
import type { FollowProps } from "./types";
import { titlesArr } from "./fixtures";

export const Follow: React.FC<FollowProps> = ({ type }) => {
  const { email } = useParams();
  const { t } = useTranslation();
  const user = useSelector(selectSelectedUserData);
  const dispatch = useAppDispatch();

  const titles = [...(user ? getSections(titlesArr, type, t, user.email) : [])];

  useEffect(() => {
    if (email) dispatch(fetchUserData(email));
    // eslint-disable-next-line
  }, [email]);

  if (user)
    return (
      <>
        <Header
          title={user.fullname}
          secondText={`@${user.username}`}
          titles={titles}
          t={t}
          icon
          variant="outlined"
        />
        {user[type].map((email) => (
          <UserInfoBlock email={email} />
        ))}
      </>
    );
  return null;
};
