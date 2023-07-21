import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
// local libs
import { FollowButton } from "../../generic/FollowButton/FollowButton";
import {
  selectUsersData,
  selectUsersLoading,
} from "../../redux/users/selectors";
import { stringAvatar } from "../../utils/stringAvatar";
// styles
import { ListItemsWrapper, RecommendedItem } from "./styles";
import {
  InnerContainer,
  RightSideBlockHeader,
  SpinnerWrapper,
  StyledLink,
  UserAvatar,
  More,
} from "../../styles";
// types
import { i18nProps } from "../../types";

export const WhoToFollow: React.FC<i18nProps> = ({ t }) => {
  const users = useSelector(selectUsersData);
  const isLoadingUsers = useSelector(selectUsersLoading);

  return (
    <InnerContainer>
      {isLoadingUsers ? (
        <SpinnerWrapper>
          <CircularProgress />
        </SpinnerWrapper>
      ) : (
        <>
          <RightSideBlockHeader>
            <Typography variant="h5">{t("whoToFollow.label")}</Typography>
          </RightSideBlockHeader>
          <ListItemsWrapper>
            {users.slice(0, 2).map((user) => (
              <StyledLink key={user.email} to={`/home/${user.email}`}>
                <RecommendedItem>
                  <ListItemAvatar>
                    <UserAvatar
                      alt={user.username}
                      {...stringAvatar(user.fullname)}
                    />
                  </ListItemAvatar>

                  <ListItemText
                    primary={user.fullname}
                    secondary={
                      <Typography component="span" variant="body2">
                        @{user.username}
                      </Typography>
                    }
                  />

                  <FollowButton height={32} variant="contained">
                    {t("followButton.follow")}
                  </FollowButton>
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
