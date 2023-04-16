import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import { Tweet } from "../../components/Tweet/Tweet";
import {
  selectTweetsItems,
  selectTweetsLoading,
} from "../../redux/tweets/selectors";
// types
import type { HomeTweetsProps } from "./types";

export const HomeTweets: React.FC<HomeTweetsProps> = ({
  classes,
}): React.ReactElement => {
  const tweets = useSelector(selectTweetsItems);
  const isLoadingTweets = useSelector(selectTweetsLoading);

  return (
    <div>
      {isLoadingTweets ? (
        <div className={classes.classes.tweetsLoadingSpinner}>
          <CircularProgress />
        </div>
      ) : (
        tweets.map((tweet) => (
          <Tweet
            key={tweet._id}
            _id={tweet._id}
            text={tweet.text}
            images={tweet.images}
            fullname={tweet.user.fullname}
            userName={tweet.user.username}
            // avatarUrl={tweet.user.avatarUrl}
            createdAt={tweet.createdAt}
            classes={classes}
          />
        ))
      )}
    </div>
  );
};
