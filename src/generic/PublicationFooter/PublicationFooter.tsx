import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material";
// local libs
import { getFooterIcons } from "../../utils/getFooterIcons";
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
import type { PublicationFooterProps } from "./types";

export const PublicationFooter: React.FC<PublicationFooterProps> = ({
  publicationData,
  type,
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const currentUserData = useSelector(selectCurrentUserData);
  const theme = useTheme();

  const { _id, likes, retweets, replies } = publicationData;

  const handleAddLike = async (): Promise<void> => {
    if (_id) {
      isFavorite
        ? await dispatch(removeLike(_id))
        : await dispatch(addLike(_id));

      await dispatch(fetchTweetData(_id));
      setIsFavorite(!isFavorite);
    }
  };

  const footerIcons = getFooterIcons(
    _id,
    likes,
    retweets,
    replies,
    handleAddLike
  );

  useEffect(() => {
    if (currentUserData) {
      setIsFavorite(likes.includes(currentUserData.email));
    }

    if (isFavorite) {
      document
        .getElementById(_id)
        ?.style.setProperty("fill", `${theme.palette.primary.main}`);
    }
    // eslint-disable-next-line
  }, [isFavorite, dispatch]);

  return (
    <FooterWrapper type={type}>
      {footerIcons.map((item) => (
        <FooterContainer onClick={item.clickFunction} key={item.id} type={type}>
          <FooterIcon type={type}>{item.icon}</FooterIcon>
          <span>{item.label}</span>
        </FooterContainer>
      ))}
    </FooterWrapper>
  );
};
