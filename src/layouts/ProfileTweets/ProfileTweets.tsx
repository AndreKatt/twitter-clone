import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import CircularProgress from "@mui/material/CircularProgress";
// local libs
import { Tweet } from "../../components/Tweet/Tweet";
import { Header } from "../../generic/Header/Header";
import {
  selectUserTweetsItems,
  selectUserTweetsLoading,
} from "../../redux/userTweets/selectors";
import { selectSelectedUserData } from "../../redux/user/selectors";
import { selectTweetsItems } from "../../redux/tweets/selectors";
import { getSections } from "../../utils/getSections";
import { titlesArr } from "./fixtures";
// styles
import { CircularProgressWrapper } from "../../styles";
// types
import type { ProfileTweetsProps } from "./types";
import type { TweetType } from "../../types";

export const ProfileTweets: React.FC<ProfileTweetsProps> = ({ type }) => {
  const [likedTweets, setLikedTweets] = useState<TweetType[]>([]);
  const { t } = useTranslation();
  const user = useSelector(selectSelectedUserData);
  const userTweets = useSelector(selectUserTweetsItems);
  const isUserTweetsLoading = useSelector(selectUserTweetsLoading);
  const allTweets = useSelector(selectTweetsItems);

  const titles = [...(user ? getSections(titlesArr, type, t, user.email) : [])];

  const currentTweets = {
    tweets: userTweets,
    replies: [],
    highlights: [],
    media: [],
    likes: likedTweets,
  };

  useEffect(() => {
    if (type === "likes" && user) {
      const foundTweets = user.likes.map(
        (id) => allTweets.filter((tweet) => tweet._id === id)[0]
      );
      setLikedTweets(foundTweets);
    }
    // eslint-disable-next-line
  }, [type]);

  return (
    <>
      <Header variant="outlined" titles={titles} t={t} />

      {isUserTweetsLoading ? (
        <CircularProgressWrapper>
          <CircularProgress />
        </CircularProgressWrapper>
      ) : (
        currentTweets[type].map((userTweet) => (
          <Tweet key={userTweet._id} tweetData={userTweet} t={t} />
        ))
      )}
    </>
  );
};
