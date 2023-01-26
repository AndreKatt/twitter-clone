import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import { Tweet } from "../components/Tweet";
import { useHomeStyles } from "../pages/Home/theme";
import {
  selectTweetsItems,
  selectTweetsLoading,
} from "../store/ducks/tweets/selectors";

interface HomeTweetsProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const HomeTweets: React.FC<HomeTweetsProps> = ({
  classes,
}): React.ReactElement => {
  const tweets = useSelector(selectTweetsItems);
  const isLoadingTweets = useSelector(selectTweetsLoading);

  return (
    <div>
      {isLoadingTweets ? (
        <div className={classes.tweetsLoadingSpinner}>
          <CircularProgress />
        </div>
      ) : (
        tweets.map((tweet) => (
          <Tweet
            key={tweet._id}
            _id={tweet._id}
            text={tweet.text}
            email={tweet.user.email}
            userName={tweet.user.username}
            // avatarUrl={tweet.user.avatarUrl}
            classes={classes}
          />
        ))
      )}
    </div>
  );
};
