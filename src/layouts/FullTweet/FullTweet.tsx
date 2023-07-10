import React, { useEffect } from "react";
import format from "date-fns/format";
import { ru } from "date-fns/locale";
import { enUS } from "date-fns/locale";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
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
import { ImagesList } from "../../components/ImagesList/ImagesList";
import { footerIcons } from "./fixtures";
import { getTitles } from "../fixtures";
// styles
import {
  SpinnerWrapper,
  TextContentContainer,
  TextContentWrapper,
  HeaderText,
  TweetAvatar,
  FooterIcon,
  StyledLink,
} from "../../styles";
import {
  FullTweetContainer,
  FullTweetWrapper,
  FooterContainer,
  HeaderTextContent,
  TweetText,
  TweetData,
} from "./styles";
import { Header } from "../../generic/Header/Header";

export const FullTweet: React.FC = () => {
  const { id }: { id?: string } = useParams();
  const dispatch = useAppDispatch();
  const tweetData = useSelector(selectTweetData);
  const isTweetLoading = useSelector(selectTweetLoading);
  const { t } = useTranslation();

  const title = getTitles(t).fullTweet.main;
  const locale = i18next.language === "en" ? enUS : ru;

  useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }
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
      <>
        <Header variant="elevation" title={title} t={t} icon />
        <Paper>
          <FullTweetWrapper>
            <StyledLink to={`/home/${tweetData.user.email}`}>
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
            </StyledLink>

            <TweetText gutterBottom>
              <span> {tweetData.text}</span>
              {tweetData.images && <ImagesList images={tweetData.images} />}
              <TweetData color={grey[500]}>
                <span>{format(new Date(tweetData.createdAt), "H:mm")}</span>
                &nbsp;
                <span>·</span>&nbsp;
                <span>
                  {format(new Date(tweetData.createdAt), "dd MMM yyyy", {
                    locale: locale,
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
      </>
    );
  }

  return null;
};
