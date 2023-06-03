import React, { ReactElement, useEffect } from "react";
import format from "date-fns/format";
import { ru } from "date-fns/locale";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import { grey } from "@mui/material/colors";
// local libs
import { useAppDispatch } from "../../redux/store";
import { fetchTweetData } from "../../redux/tweet/asyncActions";
import {
  selectTweetData,
  selectTweetLoading,
} from "../../redux/tweet/selectors";
import { setTweetData } from "../../redux/tweet/slice";
import { ImagesList } from "../../components/ImagesList/ImagesList";
import { footerIcons } from "./fixtures";
// styles
import {
  SpinnerWrapper,
  TextContentContainer,
  TextContentWrapper,
  HeaderText,
  TweetAvatar,
  FooterIcon,
} from "../../styles";
import {
  FullTweetContainer,
  FullTweetWrapper,
  FooterContainer,
  HeaderTextContent,
  TweetText,
  TweetData,
} from "./styles";

export const FullTweet: React.FC = (): ReactElement | null => {
  const { id }: { id?: string } = useParams();
  const dispatch = useAppDispatch();
  const tweetData = useSelector(selectTweetData);
  const isTweetLoading = useSelector(selectTweetLoading);

  useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }

    return () => {
      if (id) {
        dispatch(setTweetData(undefined));
      }
    };
  }, [dispatch, id]);

  if (isTweetLoading) {
    return (
      <SpinnerWrapper>
        <CircularProgress />
      </SpinnerWrapper>
    );
  }

  if (tweetData) {
    return (
      <Paper>
        <FullTweetWrapper>
          <FullTweetContainer>
            <TweetAvatar
              alt="Аватарка пользователя"
              // src={tweetData.user.avatarUrl}
            />
            <TextContentContainer>
              <TextContentWrapper>
                <HeaderTextContent>
                  <b>{tweetData.user.fullname}</b>&nbsp;
                  <div>
                    <HeaderText>@{tweetData.user.username}</HeaderText>
                  </div>
                </HeaderTextContent>
              </TextContentWrapper>
            </TextContentContainer>
          </FullTweetContainer>

          <TweetText variant="h4" gutterBottom>
            <span> {tweetData.text}</span>
            {tweetData.images && <ImagesList images={tweetData.images} />}
            <TweetData color={grey[500]}>
              <span>{format(new Date(tweetData.createdAt), "H:mm")}</span>
              &nbsp;
              <span>·</span>&nbsp;
              <span>
                {format(new Date(tweetData.createdAt), "dd MMM yyyy г.", {
                  locale: ru,
                })}
              </span>
            </TweetData>
          </TweetText>

          <FooterContainer>
            {footerIcons.map((item) => (
              <div key={item.id}>
                <FooterIcon>{item.icon}</FooterIcon>
                <span>{item.count}</span>
              </div>
            ))}
          </FooterContainer>
        </FullTweetWrapper>
      </Paper>
    );
  }

  return null;
};
