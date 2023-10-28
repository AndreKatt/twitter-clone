import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
// local libs
import { axios } from "../../core/axios";
import { Spinner } from "../../generic/Spinner/Spinner";
import { stringAvatar } from "../../utils/stringAvatar";
// styles
import { FullTweetContainer, HeaderTextContent } from "./styles";
import {
  HeaderText,
  StyledLink,
  TextContentContainer,
  TextContentWrapper,
  UserAvatar,
} from "../../styles";
// types
import type { UserInfoBlockProps } from "./types";
import type { SelectedUserData } from "../../types";

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
          <Tooltip arrow title={user.username}>
            <UserAvatar
              alt="Аватарка пользователя"
              src={user.avatarUrl}
              {...stringAvatar(user.fullname)}
            />
          </Tooltip>

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

  return <Spinner type="elementCenter" />;
};
