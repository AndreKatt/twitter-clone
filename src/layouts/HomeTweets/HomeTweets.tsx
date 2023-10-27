import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Paper from "@mui/material/Paper";
// local libs
import { Tweet } from "../../components/Tweet/Tweet";
import { AddTweetForm } from "../../components/AddTweetForm/AddTweetForm";
import { Header } from "../../generic/Header/Header";
import { Spinner } from "../../generic/Spinner/Spinner";
import {
  selectTweetsItems,
  selectTweetsLoading,
} from "../../redux/tweets/selectors";
import { UserTweetsState } from "../../redux/userTweets/types";
import { selectCurrentUserData } from "../../redux/currentUser/selectors";
import { axios } from "../../core/axios";
import { getSections } from "../../utils/getSections";
import { getTitles } from "../../utils/getTitles";
import { titlesArr } from "./fixtures";
// styles
import { AddTweetBottomLine, AddTweetWrapper } from "./styles";
// types
import type { HomeTweetsProps } from "./types";

export const HomeTweets: React.FC<HomeTweetsProps> = ({ type }) => {
  const [followingTweets, setfollowingTweets] = useState<
    UserTweetsState["items"]
  >([]);
  const currentUserData = useSelector(selectCurrentUserData);
  const homeTweets = useSelector(selectTweetsItems);
  const isLoadingTweets = useSelector(selectTweetsLoading);
  const { t } = useTranslation();

  const titles = getSections(titlesArr, type, t);
  const { home } = getTitles(t);
  const currentTweets = type === "home" ? homeTweets : followingTweets;

  useEffect(() => {
    if (currentUserData) {
      const getFollowingTweets = async () => {
        currentUserData.following.forEach(async (email) => {
          const { data } = await axios.get<UserTweetsState["items"]>(
            `/api/tweets/byEmail/${email}`
          );
          setfollowingTweets((prev) => [...prev, ...data]);
        });
      };

      getFollowingTweets();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header variant="outlined" title={home} titles={titles} t={t} />
      <Paper>
        <AddTweetWrapper>
          <AddTweetForm minHeight={56} />
        </AddTweetWrapper>
        <AddTweetBottomLine />
      </Paper>

      {isLoadingTweets ? (
        <Spinner type="pageCenter" />
      ) : (
        currentTweets.map((tweet) => (
          <Tweet key={tweet._id} tweetData={tweet} t={t} />
        ))
      )}
    </>
  );
};
