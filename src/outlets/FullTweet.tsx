import React, { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  fetchTweetData,
  setTweetData,
} from "../store/ducks/tweet/actionCreatores";
import {
  selectTweetData,
  selectTweetLoading,
} from "../store/ducks/tweet/selectors";
import { Tweet } from "../components/Tweet";

import { useHomeStyles } from "../pages/Home/theme";
import CircularProgress from "@material-ui/core/CircularProgress";

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
      <Tweet
        _id={tweetData._id}
        text={tweetData.text}
        fullname={tweetData.user.fullname}
        userName={tweetData.user.username}
        avatarUrl={tweetData.user.avatarUrl}
        classes={classes}
      />
    );
  }

  return null;
};
