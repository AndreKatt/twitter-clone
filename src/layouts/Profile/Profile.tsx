import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
// local libs
import { Header } from "../../generic/Header/Header";
import { FollowButton } from "../../generic/FollowButton/FollowButton";
import { ProfileFollowingInfo } from "../../generic/ProfileFollowingInfo/ProfileFollowingInfo";
import { useAppDispatch } from "../../redux/store";
import { fetchUserData } from "../../redux/user/asyncActions";
import { fetchUserTweets } from "../../redux/userTweets/asyncActions";
import { setUserData } from "../../redux/user/slice";
import { selectSelectedUserData } from "../../redux/user/selectors";
import {
  selectCurrentUserData,
  selectCurrentUser,
} from "../../redux/currentUser/selectors";
import { selectUserTweetsItems } from "../../redux/userTweets/selectors";
import { formatRegistrationInfoDate } from "../../utils/formatDate";
import { stringAvatar } from "../../utils/stringAvatar";
// styles
import {
  AvatarWrapper,
  CalendarIcon,
  Fullname,
  ProfileAvatar,
  ProfileButtonsContainer,
  ProfileImage,
  RegistrationData,
  UserInfoContainer,
  Username,
  FollowInfoContainer,
} from "./styles";
import { CircularProgressWrapper } from "../../styles";
import { Tooltip } from "@mui/material";

export const Profile: React.FC = () => {
  const [update, setUpdate] = useState<boolean>(false);
  const { email } = useParams();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const currentUserData = useSelector(selectCurrentUserData);
  const user = useSelector(selectSelectedUserData);
  const userTweets = useSelector(selectUserTweetsItems);
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
            <FollowButton
              userId={user._id}
              userEmail={user.email}
              following={currentUserData?.following}
              update={update}
              setUpdate={setUpdate}
              t={t}
              height={36}
            />
          )}
        </ProfileButtonsContainer>

        <AvatarWrapper>
          {isCurrentUser ? (
            <Tooltip
              arrow
              placement="right-end"
              title={t("layouts.profile.tooltip")}
            >
              <ProfileAvatar
                src={user.avatarUrl}
                {...stringAvatar(user.fullname)}
              />
            </Tooltip>
          ) : (
            <ProfileAvatar
              src={user.avatarUrl}
              {...stringAvatar(user.fullname)}
            />
          )}
        </AvatarWrapper>

        <UserInfoContainer>
          <Fullname>{user.fullname}</Fullname>
          <Username>@{user.username}</Username>
          <RegistrationData>
            <CalendarIcon />
            {t("layouts.profile.registration") +
              " " +
              formatRegistrationInfoDate(new Date(user.createdAt))}
          </RegistrationData>

          <FollowInfoContainer>
            <ProfileFollowingInfo type="followers" userData={user} t={t} />
            <ProfileFollowingInfo type="following" userData={user} t={t} />
          </FollowInfoContainer>
        </UserInfoContainer>

        <Outlet />
      </>
    );
  }

  return (
    <CircularProgressWrapper>
      <CircularProgress />
    </CircularProgressWrapper>
  );
};
