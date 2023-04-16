import React, { ReactElement, useEffect } from "react";
import classNames from "classnames";
import format from "date-fns/format";
import { ru } from "date-fns/locale";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// mui
import CircularProgress from "@material-ui/core/CircularProgress";
import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import {
  FavoriteBorderOutlined,
  RepeatOutlined,
  ReplySharp,
} from "@material-ui/icons";
// redux
import { useAppDispatch } from "../../redux/store";
import { fetchTweetData } from "../../redux/tweet/asyncActions";
import {
  selectTweetData,
  selectTweetLoading,
} from "../../redux/tweet/selectors";
import { setTweetData } from "../../redux/tweet/slice";
import { ImagesList } from "../../components/ImagesList/ImagesList";
//types
import type { FullTweetProps } from "./types";

export const FullTweet: React.FC<FullTweetProps> = ({
  classes,
}): ReactElement | null => {
  const { id }: { id?: string } = useParams();
  const dispatch = useAppDispatch();
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
      <div className={classes.classes.topicsLoadingSpinner}>
        <CircularProgress />
      </div>
    );
  }

  if (tweetData) {
    return (
      <Paper>
        <div className={classes.classes.fullTweetWrapper}>
          <div
            className={classNames(
              classes.classes.tweet,
              classes.classes.tweetsHeader
            )}
          >
            <Avatar
              className={classes.classes.tweetAvatar}
              alt="Аватарка пользователя"
              // src={tweetData.user.avatarUrl}
            />
            <div className={classes.classes.tweetContent}>
              <div className={classes.classes.tweetTextContent}>
                <Typography className={classes.classes.tweetInfoBlock}>
                  <b>{tweetData.user.fullname}</b>&nbsp;
                  <div>
                    <span className={classes.classes.tweetUserName}>
                      @{tweetData.user.username}
                    </span>
                  </div>
                </Typography>
              </div>
            </div>
          </div>
          <Typography
            className={classNames(
              classes.classes.fullTweetText,
              classes.classes.tweetsHeader
            )}
            variant="body1"
            gutterBottom
          >
            <span> {tweetData.text}</span>
            {tweetData.images && (
              <ImagesList images={tweetData.images} classes={classes} />
            )}
            <Typography
              className={classNames(
                classes.classes.fullTweetData,
                classes.classes.tweetUserName
              )}
            >
              <span>{format(new Date(tweetData.createdAt), "H:mm")}</span>
              &nbsp;
              <span>·</span>&nbsp;
              <span>
                {format(new Date(tweetData.createdAt), "dd MMM yyyy г.", {
                  locale: ru,
                })}
              </span>
            </Typography>
          </Typography>

          <div className={classes.classes.fullTweetFooter}>
            <div>
              <IconButton className={classes.classes.tweetFooterIcon}>
                <ChatBubbleOutline style={{ fontSize: 25 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton className={classes.classes.tweetFooterIcon}>
                <RepeatOutlined style={{ fontSize: 25 }} />
              </IconButton>
            </div>
            <div>
              <IconButton className={classes.classes.tweetFooterIcon}>
                <FavoriteBorderOutlined style={{ fontSize: 25 }} />
              </IconButton>
            </div>
            <div>
              <IconButton className={classes.classes.tweetFooterIcon}>
                <ReplySharp style={{ fontSize: 25 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </Paper>
    );
  }

  return null;
};
