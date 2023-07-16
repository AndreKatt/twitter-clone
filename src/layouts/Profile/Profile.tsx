import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
// local libs
import { Header } from "../../generic/Header/Header";
import { FollowButton } from "../../generic/FollowButton/FollowButton";
import { useAppDispatch } from "../../redux/store";
import { fetchUserData } from "../../redux/user/asyncActions";
import { selectSelectedUserData } from "../../redux/user/selectors";
import { setUserData } from "../../redux/user/slice";
import { getTitles } from "../fixtures";
import { profileButtons } from "./fixtures";
import { formatRegistrationDate } from "../../utils/formatDate";
import { stringAvatar } from "../../utils/stringAvatar";
// styles
import {
  AvatarWrapper,
  CalendarIcon,
  Fullname,
  StyledIconButton,
  ProfileAvatar,
  ProfileButtonsContainer,
  ProfileImage,
  RegistrationData,
  UserInfoContainer,
  Username,
} from "./styles";

export const Profile: React.FC = () => {
  const { email } = useParams();
  const dispatch = useAppDispatch();
  const user = useSelector(selectSelectedUserData);
  const { t } = useTranslation();

  const titles = getTitles(t).profile.sections;

  useEffect(() => {
    if (email) {
      dispatch(fetchUserData(email));
    }
    return () => {
      dispatch(setUserData(undefined));
    };
  }, [dispatch, email]);

  if (email && user) {
    return (
      <>
        <Header variant="outlined" title={user.fullname} t={t} icon />
        <ProfileImage />

        <ProfileButtonsContainer>
          {profileButtons.map((icon) => (
            <StyledIconButton>{icon}</StyledIconButton>
          ))}
          <FollowButton height={36}>{t("followButton")}</FollowButton>
        </ProfileButtonsContainer>

        <AvatarWrapper>
          <ProfileAvatar {...stringAvatar(user.fullname)} />
        </AvatarWrapper>

        <UserInfoContainer>
          <Fullname>{user.fullname}</Fullname>
          <Username>@{user.username}</Username>
          <RegistrationData>
            <CalendarIcon />
            {t("layouts.profile.registration") +
              " " +
              formatRegistrationDate(new Date(user.createdAt))}
          </RegistrationData>
        </UserInfoContainer>

        <Header variant="outlined" titles={titles} t={t} />
      </>
    );
  }

  return null;
};
