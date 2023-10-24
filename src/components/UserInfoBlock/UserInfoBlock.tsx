import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
// local libs
import { axios } from "../../core/axios";
import { SelectedUserData } from "../../redux/types";
import { stringAvatar } from "../../utils/stringAvatar";
// styles
import { FullTweetContainer, HeaderTextContent } from "./styles";
import {
  HeaderText,
  SpinnerWrapper,
  StyledLink,
  TextContentContainer,
  TextContentWrapper,
  UserAvatar,
} from "../../styles";
// types
import type { UserInfoBlockProps } from "./types";

export const UserInfoBlock: React.FC<UserInfoBlockProps> = ({ email }) => {
  const [user, setUser] = useState<SelectedUserData | undefined>(undefined);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get<SelectedUserData>(
        "/api/user/byUser/" + email
      );
      setUser(data);
    };
    getUser();
    // eslint-disable-next-line
  }, []);

  if (user)
    return (
      <StyledLink to={`/${user.email}/tweets`}>
        <FullTweetContainer>
          <UserAvatar
            alt="Аватарка пользователя"
            {...stringAvatar(user.fullname)}
            // src={user.avatarUrl}
          />
          <TextContentContainer>
            <TextContentWrapper>
              <HeaderTextContent>
                <b>{user.fullname}</b>&nbsp;
                <div>
                  <HeaderText>@{user.username}</HeaderText>
                </div>
              </HeaderTextContent>
            </TextContentWrapper>
          </TextContentContainer>
        </FullTweetContainer>
      </StyledLink>
    );

  return (
    <SpinnerWrapper>
      <CircularProgress />
    </SpinnerWrapper>
  );
};
