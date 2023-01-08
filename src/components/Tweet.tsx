import React from "react";

import { Paper, Typography, Grid, Avatar, IconButton } from "@material-ui/core";
import {
  ChatBubbleOutline,
  RepeatOutlined,
  FavoriteBorderOutlined,
  ReplySharp,
} from "@material-ui/icons";
import classNames from "classnames";

import { useHomeStyles } from "../pages/Home";

interface TweetProps {
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname: string;
    userName: string;
    avaterUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({
  classes,
  text,
  user,
}): React.ReactElement => {
  return (
    <Paper
      className={classNames(classes.tweet, classes.tweetsHeader)}
      variant="outlined"
    >
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`Аватарка пользователя ${user.fullname}`}
            src={user.avaterUrl}
            //   src="https://images.unsplash.com/photo-1558499932-9609acb6f443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </Grid>
        <Grid item xs={11}>
          <Typography>
            <b>{user.fullname}</b>&nbsp;
            <span className={classes.tweetUserName}>@{user.userName}</span>
            &nbsp;
            <span className={classes.tweetUserName}>·</span>&nbsp;
            <span className={classes.tweetUserName}>1 ч</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            {text}
          </Typography>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton color="primary">
                <ChatBubbleOutline style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton color="primary">
                <RepeatOutlined style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton color="primary">
                <FavoriteBorderOutlined style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton color="primary">
                <ReplySharp style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
