import React, { useEffect } from "react";
import format from "date-fns/format";
import i18next from "i18next";
import { ru } from "date-fns/locale";
import { enUS } from "date-fns/locale";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
// local libs
import { ImagesList } from "../../generic/ImagesList/ImagesList";
import { UserInfoBlock } from "../../components/UserInfoBlock/UserInfoBlock";
import { Header } from "../../generic/Header/Header";
import { TweetFooter } from "../../generic/TweetFooter/TweetFooter";
import { Spinner } from "../../generic/Spinner/Spinner";
import { useAppDispatch } from "../../redux/store";
import { fetchTweetData } from "../../redux/tweet/asyncActions";
import {
  selectTweetData,
  selectTweetLoading,
} from "../../redux/tweet/selectors";
import { getTitles } from "../../utils/getTitles";
// styles
import { FullTweetWrapper, TweetText, TweetData } from "./styles";

export const FullTweet: React.FC = () => {
  const { id }: { id?: string } = useParams();
  const dispatch = useAppDispatch();
  const tweetData = useSelector(selectTweetData);
  const isTweetLoading = useSelector(selectTweetLoading);
  const { t } = useTranslation();

  const { fullTweet } = getTitles(t);
  const locale = i18next.language === "en-US" ? enUS : ru;

  useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }
  }, [dispatch, id]);

  if (isTweetLoading) {
    return <Spinner type="elementCenter" />;
  }

  if (tweetData) {
    return (
      <>
        <Header variant="elevation" title={fullTweet} t={t} icon />
        <Paper>
          <FullTweetWrapper variant="outlined">
            <UserInfoBlock email={tweetData.user.email} />

            <TweetText gutterBottom>
              <span> {tweetData.text}</span>
              {tweetData.images && (
                <ImagesList type="tweet" images={tweetData.images} />
              )}
              <TweetData>
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
            <TweetFooter tweetData={tweetData} kind="fullTweet" />
          </FullTweetWrapper>
        </Paper>
      </>
    );
  }

  return null;
};
