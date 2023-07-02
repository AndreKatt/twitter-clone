import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
// local libs
import { Tweet } from "../../components/Tweet/Tweet";
import { AddTweetForm } from "../../components/AddTweetForm/AddTweetForm";
import { Header } from "../../generic/Header/Header";
import {
  selectTweetsItems,
  selectTweetsLoading,
} from "../../redux/tweets/selectors";
// styles
import {
  AddTweetBottomLine,
  AddTweetWrapper,
  CircularProgressWrapper,
} from "./styles";
import { titles } from "../fixtures";

export const HomeTweets: React.FC = () => {
  const tweets = useSelector(selectTweetsItems);
  const isLoadingTweets = useSelector(selectTweetsLoading);

  return (
    <>
      <Header
        variant="outlined"
        title={titles.home.main}
        titles={titles.home.sections}
      />
      <Paper>
        <AddTweetWrapper>
          <AddTweetForm />
        </AddTweetWrapper>
        <AddTweetBottomLine />
      </Paper>

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
            email={tweet.user.email}
            fullname={tweet.user.fullname}
            userName={tweet.user.username}
            // avatarUrl={tweet.user.avatarUrl}
            createdAt={tweet.createdAt}
          />
        ))
      )}
    </>
  );
};