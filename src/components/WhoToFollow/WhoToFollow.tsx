import React, { useState } from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Tooltip from "@mui/material/Tooltip";
// local libs
import { FollowButton } from "../../generic/FollowButton/FollowButton";
import { Spinner } from "../../generic/Spinner/Spinner";
import {
  selectUsersData,
  selectUsersLoading,
} from "../../redux/users/selectors";
import { selectCurrentUserData } from "../../redux/currentUser/selectors";
import { stringAvatar } from "../../utils/stringAvatar";
// styles
import {
  ListItemsWrapper,
  RecommendedItem,
  UserInfoText,
  UserInfoContainer,
} from "./styles";
import {
  InnerContainer,
  RightSideBlockHeader,
  StyledLink,
  UserAvatar,
  More,
} from "../../styles";
// types
import type { i18nProps } from "../../types";

export const WhoToFollow: React.FC<i18nProps> = ({ t }) => {
  const [update, setUpdate] = useState<boolean>(false);
  const currentUserData = useSelector(selectCurrentUserData);
  const users = useSelector(selectUsersData);
  const isLoadingUsers = useSelector(selectUsersLoading);

  return (
    <InnerContainer>
      {isLoadingUsers ? (
        <Spinner type="elementCenter" />
      ) : (
        <>
          <RightSideBlockHeader>
            <Typography variant="h5">{t("whoToFollow.label")}</Typography>
          </RightSideBlockHeader>
          <ListItemsWrapper>
            {users.slice(0, 2).map((user) => (
              <StyledLink key={user.email} to={`/${user.email}/tweets`}>
                <RecommendedItem>
                  <Tooltip arrow title={user.username}>
                    <UserInfoContainer>
                      <ListItemAvatar>
                        <UserAvatar
                          src={user.avatarUrl}
                          alt={user.username}
                          {...stringAvatar(user.fullname)}
                        />
                      </ListItemAvatar>

                      <UserInfoText
                        primary={user.fullname}
                        secondary={
                          <Typography component="span" variant="body2">
                            @{user.username}
                          </Typography>
                        }
                      />
                    </UserInfoContainer>
                  </Tooltip>

                  <FollowButton
                    userId={user._id}
                    userEmail={user.email}
                    following={currentUserData?.following}
                    update={update}
                    setUpdate={setUpdate}
                    t={t}
                    height={32}
                  />
                </RecommendedItem>
              </StyledLink>
            ))}

            <More color="primary">{t("rightSideBlocks.more")}</More>
          </ListItemsWrapper>
        </>
      )}
    </InnerContainer>
  );
};
