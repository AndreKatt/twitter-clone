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
import { getProfileSections } from "./fixtures";
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

  const titles = getProfileSections(type, t, user?.email);

  const currentTweets = {
    tweets: userTweets,
    replies: [],
    highlights: [],
    media: [],
    likes: [],
  };

  useEffect(() => {}, [likedTweets]);

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
