import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
// local libs
import { Tweet } from "../../components/Tweet/Tweet";
import { Header } from "../../generic/Header/Header";
import { FollowButton } from "../../generic/FollowButton/FollowButton";
import { useAppDispatch } from "../../redux/store";
import { subscribe, unsubscribe } from "../../redux/currentUser/asyncActions";
import { fetchUserData } from "../../redux/user/asyncActions";
import { fetchUserTweets } from "../../redux/userTweets/asyncActions";
import { setUserData } from "../../redux/user/slice";
import { selectSelectedUserData } from "../../redux/user/selectors";
import { selectUserState } from "../../redux/currentUser/selectors";
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
  FollowInfoContainer,
  FollowInfo,
  Count,
} from "./styles";
import { CircularProgressWrapper } from "../../styles";

export const Profile: React.FC = () => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [update, setUpdate] = useState<boolean>(false);

  const { email } = useParams();
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectUserState);
  const user = useSelector(selectSelectedUserData);
  const userTweets = useSelector(selectUserTweetsItems);
  const isUserTweetsLoading = useSelector(selectUserTweetsLoading);

  const titles = getTitles(t).profile.sections;

  let isCurrentUser;

  if (email && currentUser.currentUser && currentUser.user) {
    isCurrentUser = currentUser.currentUser.email === email;
  }

  const handleChangeFollowing = async (): Promise<void> => {
    if (user) {
      if (isFollowing) {
        await dispatch(unsubscribe(user._id));
      }
      if (!isFollowing) {
        await dispatch(subscribe(user._id));
      }
      setUpdate(!update);
    }
  };

  const button = document.querySelector(".followButton");

  if (button) {
    button.addEventListener("click", handleChangeFollowing);
  }

  useEffect(() => {
    if (email) {
      dispatch(fetchUserData(email));
      dispatch(fetchUserTweets(email));

      if (currentUser.user) {
        setIsFollowing(currentUser.user.following.includes(email));
      }
    }
    return () => {
      dispatch(setUserData(undefined));
    };
    // eslint-disable-next-line
  }, [email, update]);

  if (email && user) {
    return (
      <>
        <Header variant="outlined" title={user.fullname} t={t} icon />
        <ProfileImage />

        <ProfileButtonsContainer>
          {!isCurrentUser && (
            <>
              {profileButtons.map((button) => (
                <StyledIconButton key={button.id}>
                  {button.icon}
                </StyledIconButton>
              ))}

              <FollowButton height={36}>
                {isFollowing
                  ? `${t("followButton.unfollow")}`
                  : `${t("followButton.follow")}`}
              </FollowButton>
            </>
          )}
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

          <FollowInfoContainer>
            <FollowInfo>
              <Count>{user.following.length + " "}</Count>
              {t("layouts.profile.following")}
            </FollowInfo>

            <FollowInfo>
              <Count>{user.followers.length + " "}</Count>
              {t("layouts.profile.followers")}
            </FollowInfo>
          </FollowInfoContainer>
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
