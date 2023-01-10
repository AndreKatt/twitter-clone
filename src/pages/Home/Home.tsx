import React, { useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {
  Avatar,
  Button,
  Divider,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { PersonAddOutlined, Search } from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Tweet } from "../../components/Tweet";
import { SideMenu } from "../../components/SideMenu";
import { AddTweetForm } from "../../components/AddTweetForm";
import { useHomeStyles } from "./theme";
import { SearchTextField } from "../../components/SearchTextField";
import { useDispatch } from "react-redux";
import { fetchTweets } from "../../store/ducks/tweets/actionCreatores";
import { useSelector } from "react-redux";
import {
  selectTweetsLoading,
  selectTweetsItems,
} from "../../store/ducks/tweets/selectors";

export const Home = (): React.ReactElement => {
  const dispatch = useDispatch();
  const classes = useHomeStyles();

  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectTweetsLoading);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu classes={classes} />
        </Grid>
        <Grid sm={8} md={6} item>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            <Paper>
              <div className={classes.addForm}>
                <AddTweetForm classes={classes} />
              </div>

              <div className={classes.addFormBottomLine} />
            </Paper>
            {isLoading ? (
              <div className={classes.tweetsLoadingSpinner}>
                <CircularProgress />
              </div>
            ) : (
              tweets.map((tweet) => (
                <Tweet
                  key={tweet._id}
                  text={tweet.text}
                  fullname={tweet.user.fullname}
                  userName={tweet.user.username}
                  avatarUrl={tweet.user.avatarUrl}
                  classes={classes}
                />
              ))
            )}
          </Paper>
        </Grid>
        <Grid sm={3} md={3} item>
          <div className={classes.rightSide}>
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
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader}>
                <b>Актуальные темы</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Санкт-Петербург"
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов: 3 331
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Украина"
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов: +100500
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Беларусь"
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов: 12 083
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader}>
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
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
