import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
// styles
import {
  FollowButton,
  More,
  RecommendedHeader,
  RecommendedItem,
} from "./styles";
import { InnerContainer, SpinnerWrapper } from "../../styles";
import { useSelector } from "react-redux";
import {
  selectUsersData,
  selectUsersLoading,
} from "../../redux/users/selectors";

export const WhoToFollow: React.FC = () => {
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
            <Typography variant="h5">Кого читать</Typography>
          </RecommendedHeader>
          <List>
            {users.slice(0, 2).map((user) => (
              <div key={user.email}>
                <RecommendedItem>
                  <ListItemAvatar>
                    <Avatar
                      alt={user.username}
                      // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13INLI1-yVvnzG1s09l1vIQhyMPiqC_iiSQ&usqp=CAU"
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
                  <FollowButton variant="contained">Читать</FollowButton>
                </RecommendedItem>
              </div>
            ))}
            <More color="primary">Показать еще</More>
          </List>
        </>
      )}
    </InnerContainer>
  );
};
