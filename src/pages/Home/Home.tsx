import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// local libs
import { SideMenu } from "../../components/SideMenu/SideMenu";
import { UserSideProfile } from "../../components/UserSideProfile/UserSideProfile";
import { WhoToFollow } from "../../components/WhoToFollow/WhoToFollow";
import { fetchTweets } from "../../redux/tweets/asyncActions";
import { useAppDispatch } from "../../redux/store";
import { fetchUsers } from "../../redux/users/asyncActions";
// styles
import {
  RightSideContainer,
  MainContentContainer,
  MenuGrid,
  RightSideGrid,
  GridContainer,
} from "./styles";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container maxWidth="xl">
      <GridContainer container spacing={3}>
        <MenuGrid item sm={1} md={1} lg={3}>
          <SideMenu t={t} />
          <UserSideProfile t={t} />
        </MenuGrid>

        <Grid item sm={10} md={7} lg={5.5}>
          <MainContentContainer variant="outlined">
            <Outlet />
          </MainContentContainer>
        </Grid>

        <RightSideGrid item sm={0} md={4} lg={3.5}>
          <RightSideContainer>
            <WhoToFollow t={t} />
          </RightSideContainer>
        </RightSideGrid>
      </GridContainer>
    </Container>
  );
};
