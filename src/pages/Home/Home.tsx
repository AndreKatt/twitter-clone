import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// mui
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
// import InputAdornment from "@mui/material/InputAdornment";
// import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
// redux
import { selectTopicsLoading } from "../../redux/topics/selectors";
import { fetchTweets } from "../../redux/tweets/asyncActions";
import { fetchTopics } from "../../redux/topics/asyncActions";
import { useAppDispatch } from "../../redux/store";
// components
import { SearchTextField } from "../../components/SearchTextField/SearchTextField";
import { AddTweetForm } from "../../components/AddTweetForm/AddTweetForm";
import { SideMenu } from "../../components/SideMenu/SideMenu";
import { Topics } from "../../components/Topics/Topics";
import { UserSideProfile } from "../../components/UserSideProfile/UserSideProfile";
// styles
import {
  AddTweetBottomLine,
  AddTweetWrapper,
  HeaderButton,
  RecommendedHeader,
  RecommendedItem,
  RightSideContainer,
  InnerContainer,
  TweetsContainer,
  TweetsHeader,
} from "./styles";
import { SpinnerWrapper } from "../../styles";
// types

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const nav = useNavigate();

  const isLoadingTopics = useSelector(selectTopicsLoading);

  useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTopics());
  }, [dispatch]);

  const isHomeLocation = location.pathname === "/home";
  const isTopicsLocation = location.pathname === "/home/search";

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu />
          <UserSideProfile />
        </Grid>

        <Grid sm={8} md={6} item>
          <TweetsContainer variant="outlined">
            <TweetsHeader variant="outlined">
              {!isHomeLocation && (
                <HeaderButton onClick={() => nav(-1)} color="primary">
                  <ArrowBackIcon />
                </HeaderButton>
              )}
              <Typography variant="h6">
                {!isHomeLocation ? "Твитнуть" : "Главная"}
              </Typography>
            </TweetsHeader>

            {isHomeLocation || isTopicsLocation ? (
              <Paper>
                <AddTweetWrapper>
                  <AddTweetForm />
                </AddTweetWrapper>
                <AddTweetBottomLine />
              </Paper>
            ) : null}

            <Outlet />
          </TweetsContainer>
        </Grid>
        <Grid xs={1} sm={3} md={3} item>
          <RightSideContainer>
            <SearchTextField
            // variant="outlined"
            // placeholder="Поиск по твиттеру"
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <SearchIcon />
            //     </InputAdornment>
            //   ),
            // }}
            // fullWidth
            />
            <InnerContainer>
              {isLoadingTopics ? (
                <SpinnerWrapper>
                  <CircularProgress />
                </SpinnerWrapper>
              ) : (
                <Topics />
              )}
            </InnerContainer>
            <InnerContainer>
              <RecommendedHeader>
                <Typography variant="h5">Кого читать</Typography>
              </RecommendedHeader>

              <List>
                <RecommendedItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Роберт Смит"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13INLI1-yVvnzG1s09l1vIQhyMPiqC_iiSQ&usqp=CAU"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Robbie LoveCats"
                    secondary={
                      <Typography component="span" variant="body2">
                        @TheCure
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddOutlinedIcon />
                  </Button>
                </RecommendedItem>
                <Divider component="li" />
              </List>
            </InnerContainer>
          </RightSideContainer>
        </Grid>
      </Grid>
    </Container>
  );
};
