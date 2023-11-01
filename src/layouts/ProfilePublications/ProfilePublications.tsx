import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
// local libs
import { axios } from "../../core/axios";
import { Publication } from "../../components/Publication/Publication";
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
import type { ProfilePublicationsProps } from "./types";
import type { PublicationType } from "../../types";

export const ProfilePublications: React.FC<ProfilePublicationsProps> = ({
  type,
}) => {
  const [likedTweets, setLikedTweets] = useState<PublicationType[]>([]);
  const [replies, setReplies] = useState<PublicationType[]>([]);
  const [postedFiles, setPostedFiles] = useState<PublicationType[]>([]);
  const { t } = useTranslation();
  const user = useSelector(selectSelectedUserData);
  const userTweets = useSelector(selectUserTweetsItems);
  const isUserTweetsLoading = useSelector(selectUserTweetsLoading);
  const allTweets = useSelector(selectTweetsItems);

  const titles = [...(user ? getSections(titlesArr, type, t, user.email) : [])];

  const currentPublications = {
    tweets: userTweets,
    replies: replies,
    media: postedFiles,
    likes: likedTweets.reverse(),
  };

  const getReplies = async () => {
    if (user) {
      const { data } = await axios.get<PublicationType[]>(
        "/api/replies/byUser/" + user.email
      );

      setReplies(data);
    }
  };

  useEffect(() => {
    type === "replies" && getReplies();

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
        currentPublications[type].map((publication) => (
          <Publication
            key={publication._id}
            type="tweet"
            publicationData={publication}
            t={t}
          />
        ))
      )}
    </>
  );
};
