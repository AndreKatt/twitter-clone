import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
// local libs
import { SearchTextField } from "../../components/SearchTextField/SearchTextField";
import { SideMenu } from "../../components/SideMenu/SideMenu";
import { Topics } from "../../components/Topics/Topics";
import { UserSideProfile } from "../../components/UserSideProfile/UserSideProfile";
import { WhoToFollow } from "../../components/WhoToFollow/WhoToFollow";
import { selectTopicsLoading } from "../../redux/topics/selectors";
import { fetchTweets } from "../../redux/tweets/asyncActions";
import { fetchTopics } from "../../redux/topics/asyncActions";
import { useAppDispatch } from "../../redux/store";
import { fetchUsers } from "../../redux/users/asyncActions";
// styles
import {
  RightSideContainer,
  TweetsContainer,
  MenuGrid,
  RightSideGrid,
} from "./styles";
import { InnerContainer, SpinnerWrapper } from "../../styles";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const isLoadingTopics = useSelector(selectTopicsLoading);

  useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTopics());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <MenuGrid item sm={2} md={2} lg={3}>
          <SideMenu />
          <UserSideProfile />
        </MenuGrid>

        <Grid item sm={9} md={6} lg={5.5}>
          <TweetsContainer variant="outlined">
            <Outlet />
          </TweetsContainer>
        </Grid>

        <RightSideGrid item sm={0} md={3.5} lg={3.5}>
          <RightSideContainer>
            <SearchTextField />
            <InnerContainer>
              {isLoadingTopics ? (
                <SpinnerWrapper>
                  <CircularProgress />
                </SpinnerWrapper>
              ) : (
                <Topics />
              )}
            </InnerContainer>
            <WhoToFollow />
          </RightSideContainer>
        </RightSideGrid>
      </Grid>
    </Container>
  );
};
