import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// mui
// components
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import InputAdornment from "@material-ui/core/InputAdornment";
//icons
import Search from "@material-ui/icons/Search";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ArrowBack, PersonAddOutlined } from "@material-ui/icons";
// redux
import { selectTopicsLoading } from "../../redux/topics/selectors";
import { fetchTweets } from "../../redux/tweets/asyncActions";
import { fetchTopics } from "../../redux/topics/asyncActions";
// components
import { SearchTextField } from "../../components/SearchTextField/SearchTextField";
import { AddTweetForm } from "../../components/AddTweetForm/AddTweetForm";
import { SideMenu } from "../../components/SideMenu/SideMenu";
import { Topics } from "../../components/Topics/Topics";
// styles
import { useAppDispatch } from "../../redux/store";
import { UserSideProfile } from "../../components/UserSideProfile/UserSideProfile";
// types
import type { HomeProps } from "./types";

export const Home: React.FC<HomeProps> = ({ classes }) => {
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
    <Container className={classes.classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu classes={classes} />
          <UserSideProfile classes={classes} />
        </Grid>
        <Grid sm={8} md={6} item>
          <Paper className={classes.classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.classes.tweetsHeader} variant="outlined">
              {!isHomeLocation && (
                <IconButton
                  onClick={() => nav(-1)}
                  color="primary"
                  className={classes.classes.tweetsHeaderBackButton}
                >
                  <ArrowBack />
                </IconButton>
              )}
              <Typography variant="h6">
                {!isHomeLocation ? "Твитнуть" : "Главная"}
              </Typography>
            </Paper>
            {isHomeLocation || isTopicsLocation ? (
              <Paper>
                <div className={classes.classes.addForm}>
                  <AddTweetForm classes={classes} />
                </div>
                <div className={classes.classes.addFormBottomLine} />
              </Paper>
            ) : null}

            <Outlet />
          </Paper>
        </Grid>
        <Grid xs={1} sm={3} md={3} item>
          <div className={classes.classes.rightSide}>
            <SearchTextField
              variant="outlined"
              placeholder="Поиск по твиттеру"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Paper className={classes.classes.rightSideBlock}>
              {isLoadingTopics ? (
                <div className={classes.classes.topicsLoadingSpinner}>
                  <CircularProgress />
                </div>
              ) : (
                <Topics classes={classes} />
              )}
            </Paper>
            <Paper className={classes.classes.rightSideBlock}>
              <Paper className={classes.classes.rightSideBlockHeader}>
                <Typography variant="h5">Кого читать</Typography>
              </Paper>
              <List>
                <ListItem className={classes.classes.rightSideBlockItem}>
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
                    <PersonAddOutlined />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
