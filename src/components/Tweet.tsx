import React from "react";
import { Link } from "react-router-dom";

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
  _id: string;
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  fullname: string;
  userName: string;
  avatarUrl: string;
}

export const Tweet: React.FC<TweetProps> = ({
  _id,
  classes,
  text,
  fullname,
  userName,
  avatarUrl,
}): React.ReactElement => {
  return (
    <Paper
      className={classNames(classes.tweet, classes.tweetsHeader)}
      variant="outlined"
    >
      <Avatar
        className={classes.tweetAvatar}
        alt={`Аватарка пользователя ${fullname}`}
        src={avatarUrl}
      />
      <div className={classes.tweetContent}>
        <div className={classes.tweetTextContent}>
          <Typography>
            <b>{fullname}</b>&nbsp;
            <span className={classes.tweetUserName}>@{userName}</span>
            &nbsp;
            <span className={classes.tweetUserName}>·</span>&nbsp;
            <span className={classes.tweetUserName}>1 ч</span>
          </Typography>
        </div>

        <Link to={`tweet/${_id}`} className={classes.tweetLink}>
          <Typography variant="body1" gutterBottom>
            <span> {text}</span>
          </Typography>
        </Link>
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
