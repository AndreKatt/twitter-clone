import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// local libs
import { getFooterIcons } from "./fixtures";
import { useAppDispatch } from "../../redux/store";
import {
  addLike,
  fetchTweetData,
  removeLike,
} from "../../redux/tweet/asyncActions";
import { selectCurrentUserData } from "../../redux/currentUser/selectors";
// styles
import { FooterIcon, FooterWrapper, FooterContainer } from "./styles";
// types
import type { TweetFooterProps } from "./types";

export const TweetFooter: React.FC<TweetFooterProps> = ({
  tweetData,
  kind,
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const currentUserData = useSelector(selectCurrentUserData);
  const { _id, likes, retweets, replies } = tweetData;

  const handleAddLike = async (): Promise<void> => {
    if (_id) {
      isFavorite
        ? await dispatch(removeLike(_id))
        : await dispatch(addLike(_id));

      await dispatch(fetchTweetData(_id));
      setIsFavorite(!isFavorite);
    }
  };

  const footerIcons = getFooterIcons(likes, retweets, replies, handleAddLike);

  useEffect(() => {
    if (currentUserData) {
      setIsFavorite(likes.includes(currentUserData.email));
    }
    // eslint-disable-next-line
  }, [isFavorite, dispatch]);

  return (
    <FooterWrapper kind={kind}>
      {footerIcons.map((item) => (
        <FooterContainer onClick={item.clickFunction} key={item.id} kind={kind}>
          <FooterIcon kind={kind}>{item.icon}</FooterIcon>
          <span>{item.label}</span>
        </FooterContainer>
      ))}
    </FooterWrapper>
  );
};
