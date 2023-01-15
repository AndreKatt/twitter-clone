import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ReactElement, useEffect } from "react";
import { useParams } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  fetchTweetData,
  setTweetData,
} from "../store/ducks/tweet/actionCreatores";
import {
  selectTweetData,
  selectTweetLoading,
} from "../store/ducks/tweet/selectors";

import { useHomeStyles } from "../pages/Home/theme";

interface FullTweetProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const FullTweet: React.FC<FullTweetProps> = ({
  classes,
}): ReactElement | null => {
  const { id }: { id?: string } = useParams();
  const dispatch = useDispatch();
  const tweetData = useSelector(selectTweetData);
  const isTweetLoading = useSelector(selectTweetLoading);

  useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }

    return () => {
      if (id) {
        dispatch(setTweetData(undefined));
      }
    };
  }, [dispatch, id]);

  if (isTweetLoading) {
    return (
      <div className={classes.topicsLoadingSpinner}>
        <CircularProgress />
      </div>
    );
  }

  if (tweetData) {
    return (
      <Paper variant="outlined">
        <div className={classNames(classes.tweet, classes.tweetsHeader)}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`Аватарка пользователя ${tweetData.user.fullname}`}
            src={tweetData.user.avatarUrl}
          />
          <div className={classes.tweetContent}>
            <div className={classes.tweetTextContent}>
              <Typography className={classes.tweetInfoBlock}>
                <b>{tweetData.user.fullname}</b>&nbsp;
                <div>
                  <span className={classes.tweetUserName}>
                    @{tweetData.user.username}
                  </span>
                  &nbsp;
                  <span className={classes.tweetUserName}>·</span>&nbsp;
                  <span className={classes.tweetUserName}>1 ч</span>
                </div>
              </Typography>
            </div>
          </div>
        </div>
        <Typography
          className={classNames(classes.fullTweetText, classes.tweetsHeader)}
          variant="body1"
          gutterBottom
        >
          <span> {tweetData.text}</span>
        </Typography>
      </Paper>
    );
  }

  return null;
};
