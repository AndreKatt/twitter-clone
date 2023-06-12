import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { Tweet } from "../../components/Tweet/Tweet";
import {
  selectTweetsItems,
  selectTweetsLoading,
} from "../../redux/tweets/selectors";
// styles
import { CircularProgressWrapper } from "./styles";

export const HomeTweets: React.FC = () => {
  const tweets = useSelector(selectTweetsItems);
  const isLoadingTweets = useSelector(selectTweetsLoading);

  return (
    <div>
      {isLoadingTweets ? (
        <CircularProgressWrapper>
          <CircularProgress />
        </CircularProgressWrapper>
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
          />
        ))
      )}
    </div>
  );
};
