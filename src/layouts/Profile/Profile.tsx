import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
// local libs
import { Tweet } from "../../components/Tweet/Tweet";
import { Header } from "../../generic/Header/Header";
import { FollowButton } from "../../generic/FollowButton/FollowButton";
import { useAppDispatch } from "../../redux/store";
import { fetchUserData } from "../../redux/user/asyncActions";
import { fetchUserTweets } from "../../redux/userTweets/asyncActions";
import { setUserData } from "../../redux/user/slice";
import { setUserTweets } from "../../redux/userTweets/slice";
import { selectSelectedUserData } from "../../redux/user/selectors";
import {
  selectUserTweetsItems,
  selectUserTweetsLoading,
} from "../../redux/userTweets/selectors";
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
import { CircularProgressWrapper } from "../../styles";

export const Profile: React.FC = () => {
  const { email } = useParams();
  const dispatch = useAppDispatch();
  const user = useSelector(selectSelectedUserData);
  const userTweets = useSelector(selectUserTweetsItems);
  const isUserTweetsLoading = useSelector(selectUserTweetsLoading);
  const { t } = useTranslation();

  const titles = getTitles(t).profile.sections;

  useEffect(() => {
    if (email) {
      dispatch(fetchUserData(email));
      dispatch(fetchUserTweets(email));
    }
    return () => {
      dispatch(setUserData(undefined));
      dispatch(setUserTweets([]));
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

        {isUserTweetsLoading ? (
          <CircularProgressWrapper>
            <CircularProgress />
          </CircularProgressWrapper>
        ) : (
          userTweets.map((userTweet) => (
            <Tweet
              key={userTweet._id}
              _id={userTweet._id}
              text={userTweet.text}
              images={userTweet.images}
              email={userTweet.user.email}
              fullname={userTweet.user.fullname}
              userName={userTweet.user.username}
              createdAt={userTweet.createdAt}
              t={t}
            />
          ))
        )}
      </>
    );
  }

  return (
    <CircularProgressWrapper>
      <CircularProgress />
    </CircularProgressWrapper>
  );
};
