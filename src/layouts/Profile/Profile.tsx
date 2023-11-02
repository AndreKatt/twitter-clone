import React, { useEffect, useRef, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Tooltip } from "@mui/material";
// local libs
import { HiddenFileInput } from "../../generic/HiddenFileInput/HiddenFileInput";
import { ProfileAvatar } from "../../components/ProfileAvatar/ProfileAvatar";
import { Header } from "../../generic/Header/Header";
import { FollowButton } from "../../generic/FollowButton/FollowButton";
import { ProfileFollowingInfo } from "../../generic/ProfileFollowingInfo/ProfileFollowingInfo";
import { Spinner } from "../../generic/Spinner/Spinner";
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
// styles
import {
  CalendarIcon,
  Fullname,
  ProfileButtonsContainer,
  ProfileImage,
  RegistrationData,
  UserInfoContainer,
  Username,
  FollowInfoContainer,
} from "./styles";

export const Profile: React.FC = () => {
  const [update, setUpdate] = useState<boolean>(false);
  const { email } = useParams();
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const currentUserData = useSelector(selectCurrentUserData);
  const user = useSelector(selectSelectedUserData);
  const userTweets = useSelector(selectUserTweetsItems);

  let isCurrentUser;

  const handleClickImage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

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
  }, [email, update, inputRef]);

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

        {isCurrentUser ? (
          <>
            <HiddenFileInput
              type="setProfileImage"
              inputRef={inputRef}
              user={user}
            />

            <Tooltip arrow title={t("layouts.profile.tooltip.photo")}>
              <ProfileImage
                url={user.profileImageUrl}
                onClick={handleClickImage}
              />
            </Tooltip>
          </>
        ) : (
          <ProfileImage url={user.profileImageUrl} />
        )}

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

        <ProfileAvatar isCurrentUser={isCurrentUser} user={user} t={t} />

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

  return <Spinner type="pageCenter" />;
};
