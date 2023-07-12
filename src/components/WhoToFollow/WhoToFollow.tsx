import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import {
  selectUsersData,
  selectUsersLoading,
} from "../../redux/users/selectors";
import { stringAvatar } from "../../utils/stringAvatar";
// styles
import {
  FollowButton,
  ListItemsWrapper,
  More,
  RecommendedHeader,
  RecommendedItem,
} from "./styles";
import {
  InnerContainer,
  SpinnerWrapper,
  StyledLink,
  UserAvatar,
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
          <RecommendedHeader>
            <Typography variant="h5">{t("whoToFollow.label")}</Typography>
          </RecommendedHeader>
          <ListItemsWrapper style={{ paddingBottom: 0 }}>
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
                  <FollowButton variant="contained">
                    {t("whoToFollow.buttonLabel")}
                  </FollowButton>
                </RecommendedItem>
              </StyledLink>
            ))}
            <More color="primary">{t("whoToFollow.more")}</More>
          </ListItemsWrapper>
        </>
      )}
    </InnerContainer>
  );
};
