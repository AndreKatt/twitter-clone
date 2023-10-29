import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
// local libs
import { ImagesList } from "../../generic/ImagesList/ImagesList";
import { TweetFooter } from "../../generic/TweetFooter/TweetFooter";
import { formatTweetInfoDate } from "../../utils/formatDate";
import { stringAvatar } from "../../utils/stringAvatar";
import { getAvatarUrl } from "../../utils/getAvatarUrl";
// styles
import {
  TextContentContainer,
  TextContentWrapper,
  HeaderText,
  StyledLink,
  UserAvatar,
} from "../../styles";
import {
  HeaderContainer,
  HeaderTextContainer,
  TweetContainer,
  TweetTextWrapper,
} from "./styles";
// types
import type { TweetProps } from "./types";
import type { i18nProps } from "../../types";
import { TweetActionsMenu } from "../TweetActionsMenu/TweetActionsMenu";

export const Tweet: React.FC<TweetProps & i18nProps> = ({
  tweetData,
  t,
}): React.ReactElement => {
  const [avatarUrl, setavatarUrl] = useState<string>("");
  const currentUserEmail = localStorage.getItem("email");
  const { _id, text, images, user, createdAt } = tweetData;

  const isCurrentUser = currentUserEmail === tweetData.user.email;
  const userLink = `/${user.email}/tweets`;

  useEffect(() => {
    const getUrl = async () => {
      const url = await getAvatarUrl(user.email);
      setavatarUrl(url);
    };

    getUrl();
    // eslint-disable-next-line
  }, []);

  return (
    <TweetContainer variant="outlined">
      <HeaderContainer>
        <StyledLink to={userLink}>
          <Tooltip arrow title={user.fullname}>
            <UserAvatar
              alt={`Аватарка пользователя ${user.fullname}`}
              src={avatarUrl}
              {...stringAvatar(user.username)}
            />
          </Tooltip>
        </StyledLink>

        <TextContentContainer>
          <StyledLink to={userLink}>
            <HeaderTextContainer>
              <TextContentWrapper>
                <Typography>
                  <b>{user.username}</b>&nbsp;
                  <HeaderText>@{user.fullname}</HeaderText>
                  &nbsp;
                  <HeaderText>·</HeaderText>&nbsp;
                  <HeaderText>
                    {`${formatTweetInfoDate(new Date(createdAt))} ${t(
                      "tweet.dateText"
                    )}`}
                  </HeaderText>
                </Typography>
              </TextContentWrapper>
            </HeaderTextContainer>
          </StyledLink>

          <StyledLink to={`/tweet/${_id}`}>
            <TweetTextWrapper variant="body1" gutterBottom>
              <span>{text}</span>
            </TweetTextWrapper>
            {images && <ImagesList type="tweet" images={images} />}
          </StyledLink>

          <TweetFooter tweetData={tweetData} kind="tweet" />
        </TextContentContainer>
      </HeaderContainer>

      {isCurrentUser && <TweetActionsMenu t={t} id={_id} />}
    </TweetContainer>
  );
};
