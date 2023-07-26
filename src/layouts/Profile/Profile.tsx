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
import { fetchUserData } from "../../redux/user/asyncActions";
import { fetchUserTweets } from "../../redux/userTweets/asyncActions";
import { setUserData } from "../../redux/user/slice";
import { selectSelectedUserData } from "../../redux/user/selectors";
import {
  selectCurrentUserData,
  selectCurrentUser,
} from "../../redux/currentUser/selectors";
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
import { CircularProgressWrapper, StyledLink } from "../../styles";

export const Profile: React.FC = () => {
  const [update, setUpdate] = useState<boolean>(false);
  const { email } = useParams();
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const currentUserData = useSelector(selectCurrentUserData);
  const user = useSelector(selectSelectedUserData);
  const userTweets = useSelector(selectUserTweetsItems);
  const isUserTweetsLoading = useSelector(selectUserTweetsLoading);

  const titles = getTitles(t).profile.sections;
  let isCurrentUser;

  if (email && currentUser) {
    isCurrentUser = currentUser.email === email;
  }

  useEffect(() => {
    if (email) {
      dispatch(fetchUserData(email));
      dispatch(fetchUserTweets(email));
    }

    return () => {
      dispatch(setUserData(undefined));
    };
    // eslint-disable-next-line
  }, [email, update]);

  if (email && user) {
    return (
      <>
        <Header
          variant="outlined"
          title={user.fullname}
          secondText={`${userTweets.length} tweet`}
          t={t}
          icon
        />
        <ProfileImage />

        <ProfileButtonsContainer>
          {!isCurrentUser && (
            <>
              {profileButtons.map((button) => (
                <StyledIconButton key={button.id}>
                  {button.icon}
                </StyledIconButton>
              ))}

              <FollowButton
                userId={user._id}
                userEmail={user.email}
                following={currentUserData?.following}
                update={update}
                setUpdate={setUpdate}
                t={t}
                height={36}
              />
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
              <StyledLink to={"followers"}>
                <Count>{user.followers.length + " "}</Count>
                {t("layouts.profile.followers")}
              </StyledLink>
            </FollowInfo>

            <FollowInfo>
              <StyledLink to={"following"}>
                <Count>{user.following.length + " "}</Count>
                {t("layouts.profile.following")}
              </StyledLink>
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
