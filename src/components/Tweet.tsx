import React from "react";

import { Paper, Typography, Avatar, IconButton } from "@material-ui/core";
import {
  ChatBubbleOutline,
  RepeatOutlined,
  FavoriteBorderOutlined,
  ReplySharp,
} from "@material-ui/icons";
import classNames from "classnames";

import { useHomeStyles } from "../pages/Home/theme";

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
      <Avatar
        className={classes.tweetAvatar}
        alt={`Аватарка пользователя ${user.fullname}`}
        src={user.avaterUrl}
      />
      <div className={classes.tweetContent}>
        <div className={classes.tweetTextContent}>
          <Typography>
            <b>{user.fullname}</b>&nbsp;
            <span className={classes.tweetUserName}>@{user.userName}</span>
            &nbsp;
            <span className={classes.tweetUserName}>·</span>&nbsp;
            <span className={classes.tweetUserName}>1 ч</span>
          </Typography>
        </div>

        <Typography variant="body1" gutterBottom>
          <span> {text}</span>
        </Typography>
        <div className={classes.tweetFooter}>
          <div>
            <IconButton className={classes.tweetFooterIcon}>
              <ChatBubbleOutline style={{ fontSize: 20 }} />
            </IconButton>
            <span>1</span>
          </div>
          <div>
            <IconButton className={classes.tweetFooterIcon}>
              <RepeatOutlined style={{ fontSize: 20 }} />
            </IconButton>
          </div>
          <div>
            <IconButton className={classes.tweetFooterIcon}>
              <FavoriteBorderOutlined style={{ fontSize: 20 }} />
            </IconButton>
          </div>
          <div>
            <IconButton className={classes.tweetFooterIcon}>
              <ReplySharp style={{ fontSize: 20 }} />
            </IconButton>
          </div>
        </div>
      </div>
    </Paper>
  );
};
