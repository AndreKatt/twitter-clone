import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
// local libs
import { Tweet } from "../../components/Tweet/Tweet";
import { Header } from "../../generic/Header/Header";
import { Spinner } from "../../generic/Spinner/Spinner";
import {
  selectUserTweetsItems,
  selectUserTweetsLoading,
} from "../../redux/userTweets/selectors";
import { selectSelectedUserData } from "../../redux/user/selectors";
import { selectTweetsItems } from "../../redux/tweets/selectors";
import { getSections } from "../../utils/getSections";
import { titlesArr } from "./fixtures";
// types
import type { ProfileTweetsProps } from "./types";
import type { TweetType } from "../../types";

export const ProfileTweets: React.FC<ProfileTweetsProps> = ({ type }) => {
  const [likedTweets, setLikedTweets] = useState<TweetType[]>([]);
  const [postedFiles, setPostedFiles] = useState<TweetType[]>([]);
  const { t } = useTranslation();
  const user = useSelector(selectSelectedUserData);
  const userTweets = useSelector(selectUserTweetsItems);
  const isUserTweetsLoading = useSelector(selectUserTweetsLoading);
  const allTweets = useSelector(selectTweetsItems);

  const titles = [...(user ? getSections(titlesArr, type, t, user.email) : [])];

  const currentTweets = {
    tweets: userTweets,
    replies: [],
    media: postedFiles,
    likes: likedTweets.reverse(),
  };

  useEffect(() => {
    if (type === "likes" && user) {
      const foundTweets = user.likes.map(
        (id) => allTweets.filter((tweet) => tweet._id === id)[0]
      );
      setLikedTweets(foundTweets);
    }

    if (type === "media") {
      const files = userTweets
        .filter((tweet) => tweet.images.length > 0)
        .map((tweet) => ({ ...tweet, text: "" }));
      setPostedFiles(files);
    }
    // eslint-disable-next-line
  }, [type, allTweets, userTweets]);

  return (
    <>
      <Header variant="outlined" titles={titles} t={t} />

      {isUserTweetsLoading ? (
        <Spinner type="pageCenter" />
      ) : (
        currentTweets[type].map((userTweet) => (
          <Tweet key={userTweet._id} tweetData={userTweet} t={t} />
        ))
      )}
    </>
  );
};
