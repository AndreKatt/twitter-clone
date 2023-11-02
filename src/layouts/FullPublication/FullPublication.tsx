import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import i18next from "i18next";
import { ru } from "date-fns/locale";
import { enUS } from "date-fns/locale";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Paper from "@mui/material/Paper";
// local libs
import { axios } from "../../core/axios";
import { ImagesList } from "../../generic/ImagesList/ImagesList";
import { UserInfoBlock } from "../../components/UserInfoBlock/UserInfoBlock";
import { AddPublicationForm } from "../../components/AddPublicationForm/AddPublicationForm";
import { Publication } from "../../components/Publication/Publication";
import { Header } from "../../generic/Header/Header";
import { PublicationFooter } from "../../generic/PublicationFooter/PublicationFooter";
import { Spinner } from "../../generic/Spinner/Spinner";
import { useAppDispatch } from "../../redux/store";
import { fetchTweetData } from "../../redux/tweet/asyncActions";
import {
  selectTweetData,
  selectTweetLoading,
} from "../../redux/tweet/selectors";
import { getTitles } from "../../utils/getTitles";
// styles
import {
  FullPublicationWrapper,
  PublicationText,
  DateContainer,
  StyledDivider,
  AddPublicationFormWrapper,
} from "./styles";
// types
import type { FullPublicationProps } from "./types";
import type { PublicationType } from "../../types";

export const FullPublication: React.FC<FullPublicationProps> = ({ type }) => {
  const [fullReply, setFullReply] = useState<PublicationType | undefined>(
    undefined
  );
  const [replies, setReplies] = useState<PublicationType[]>([]);
  const { id }: { id?: string } = useParams();
  const dispatch = useAppDispatch();
  const tweetData = useSelector(selectTweetData);
  const isTweetLoading = useSelector(selectTweetLoading);
  const { t } = useTranslation();

  const { fullPublication } = getTitles(t);
  const locale = i18next.language === "en-US" ? enUS : ru;

  const fetchReply = async () => {
    const { data } = await axios.get<PublicationType>(
      "/api/replies/byReply/" + id
    );
    setFullReply(data);
  };

  const getReplies = async () => {
    const { data } = await axios.get<PublicationType[]>(
      "/api/replies/byPublication/" + id
    );
    setReplies(data);
  };

  useEffect(() => {
    if (id) {
      if (type === "tweet") {
        dispatch(fetchTweetData(id));
        getReplies();
      } else {
        fetchReply();
      }
    }
    // eslint-disable-next-line
  }, [dispatch, id, type]);

  const publication = type === "tweet" ? tweetData : fullReply;

  if (isTweetLoading) {
    return <Spinner type="elementCenter" />;
  }

  if (publication) {
    return (
      <>
        <Header variant="elevation" title={fullPublication} t={t} icon />
        <Paper>
          <FullPublicationWrapper variant="outlined">
            <UserInfoBlock email={publication.user.email} />

            <PublicationText gutterBottom>
              <span> {publication.text}</span>
              {publication.images && (
                <ImagesList type="publication" images={publication.images} />
              )}
              <DateContainer>
                <span>{format(new Date(publication.createdAt), "H:mm")}</span>
                &nbsp;
                <span>·</span>&nbsp;
                <span>
                  {format(new Date(publication.createdAt), "d MMM yyyy", {
                    locale: locale,
                  })}
                </span>
              </DateContainer>
            </PublicationText>

            <StyledDivider />
            <PublicationFooter
              publicationData={publication}
              kind="fullPublication"
            />
            <StyledDivider />

            <AddPublicationFormWrapper>
              <AddPublicationForm
                type="reply"
                publicationId={id}
                minHeight={56}
              />
            </AddPublicationFormWrapper>
          </FullPublicationWrapper>

          {replies.map((reply) => (
            <Publication
              key={reply._id}
              type="reply"
              publicationData={reply}
              t={t}
            />
          ))}
        </Paper>
      </>
    );
  }

  return null;
};
