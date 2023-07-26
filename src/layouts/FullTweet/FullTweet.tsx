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
import Divider from "@mui/material/Divider";
import { grey } from "@mui/material/colors";
// local libs
import { ImagesList } from "../../components/ImagesList/ImagesList";
import { Header } from "../../generic/Header/Header";
import { useAppDispatch } from "../../redux/store";
import { fetchTweetData } from "../../redux/tweet/asyncActions";
import {
  selectTweetData,
  selectTweetLoading,
} from "../../redux/tweet/selectors";
import { footerIcons } from "./fixtures";
import { getTitles } from "../fixtures";
// styles
import { SpinnerWrapper, FooterIcon } from "../../styles";
import {
  FullTweetWrapper,
  FooterContainer,
  TweetText,
  TweetData,
} from "./styles";
import { UserInfoBlock } from "../../components/UserInfoBlock/UserInfoBlock";

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
          <FullTweetWrapper variant="outlined">
            <UserInfoBlock email={tweetData.user.email} />

            <TweetText gutterBottom>
              <span> {tweetData.text}</span>
              {tweetData.images && <ImagesList images={tweetData.images} />}
              <TweetData color={grey[500]}>
                <span>{format(new Date(tweetData.createdAt), "H:mm")}</span>
                &nbsp;
                <span>·</span>&nbsp;
                <span>
                  {format(new Date(tweetData.createdAt), "d MMM yyyy", {
                    locale: locale,
                  })}
                </span>
              </TweetData>
            </TweetText>

            <Divider />

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
