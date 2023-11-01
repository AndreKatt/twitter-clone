import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
// local libs
import { ImagesList } from "../../generic/ImagesList/ImagesList";
import { PublicationFooter } from "../../generic/PublicationFooter/PublicationFooter";
import { formatPublicationInfoDate } from "../../utils/formatDate";
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
  PublicationDataContainer,
  HeaderTextContainer,
  PublicationContainer,
  PublicationTextWrapper,
} from "./styles";
// types
import type { PublicationProps } from "./types";
import type { i18nProps } from "../../types";
import { TweetActionsMenu } from "../TweetActionsMenu/TweetActionsMenu";

export const Publication: React.FC<PublicationProps & i18nProps> = ({
  type,
  publicationData,
  t,
}): React.ReactElement => {
  const [avatarUrl, setavatarUrl] = useState<string>("");
  const currentUserEmail = localStorage.getItem("email");
  const { _id, text, images, user, createdAt } = publicationData;

  const isCurrentUser = currentUserEmail === publicationData.user.email;
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
    <PublicationContainer variant="outlined">
      <PublicationDataContainer>
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
                    {`${formatPublicationInfoDate(new Date(createdAt))} ${t(
                      "publication.dateText"
                    )}`}
                  </HeaderText>
                </Typography>
              </TextContentWrapper>
            </HeaderTextContainer>
          </StyledLink>

          <StyledLink to={`/${type}/${_id}`}>
            <PublicationTextWrapper variant="body1" gutterBottom>
              <span>{text}</span>
            </PublicationTextWrapper>
            {images && <ImagesList type="publication" images={images} />}
          </StyledLink>

          <PublicationFooter
            publicationData={publicationData}
            type="publication"
          />
        </TextContentContainer>
      </PublicationDataContainer>

      {isCurrentUser && <TweetActionsMenu t={t} id={_id} />}
    </PublicationContainer>
  );
};
