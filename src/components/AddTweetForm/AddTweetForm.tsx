import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
// local libs
import { UploadImages } from "../UploadImages/UploadImages";
import { selectAddFormState } from "../../redux/tweets/selectors";
import { addTweet } from "../../redux/tweets/asyncActions";
import { setAddFormState } from "../../redux/tweets/slice";
import { AddFormState } from "../../redux/tweets/types";
import { useAppDispatch } from "../../redux/store";
import { selectCurrentUser } from "../../redux/currentUser/selectors";
import { uploadFiles } from "../../utils/uploadImages";
import { stringAvatar } from "../../utils/stringAvatar";
// styles
import {
  BodyContainer,
  BottomContainer,
  ImagesWrapper,
  ButtomRightContainer,
  CircularProgressWrapper,
  Textarea,
  StyledCircularProgress,
  StyledDivider,
} from "./styles";
import { StyledLink, UserAvatar } from "../../styles";
//types
import type { AddTweetFormProps } from "./types";
import type { UploadedObject } from "../../types";

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  maxRows,
  minHeight,
  divider,
}): React.ReactElement => {
  const dispatch = useAppDispatch();
  const addFormState = useSelector(selectAddFormState);
  const user = useSelector(selectCurrentUser);
  const [text, setText] = useState<string>(
    sessionStorage.getItem("tweetText") || ""
  );
  const [images, setImages] = useState<UploadedObject[]>([]);
  const { t } = useTranslation();

  const textLimitPercent = (text.length / 280) * 100;
  const textCount = 280 - text.length;

  const handleChangeTextarea = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      const txt = e.currentTarget.value;
      setText(txt);
      sessionStorage.setItem("tweetText", txt);
    }
  };

  const handleClickAddTweet = async (): Promise<void> => {
    const email = window.localStorage.getItem("email");
    const fullname = window.localStorage.getItem("fullname");
    const username = window.localStorage.getItem("username");

    if (fullname && username && email) {
      dispatch(setAddFormState(AddFormState.LOADING));

      const uploadedUrls =
        images[0] && (await uploadFiles(images.map((image) => image.file)));

      const tweet = {
        text: text,
        images: uploadedUrls,
        user: {
          email: email,
          fullname: fullname,
          username: username,
        },
      };

      await dispatch(addTweet(tweet));
      setText("");
      setImages([]);
    }

    setAddFormState(AddFormState.ERROR);
  };

  return (
    <>
      <BodyContainer minHeight={minHeight}>
        <div>
          <StyledLink to={`/${user?.email}/tweets`}>
            <UserAvatar {...stringAvatar(user?.username)} alt="Ваша аватарка" />
          </StyledLink>
        </div>
        <Textarea
          onChange={handleChangeTextarea}
          placeholder={t("addTweetForm.placeholder")}
          value={text}
          maxRows={maxRows}
        />
      </BodyContainer>

      {divider && <StyledDivider />}

      <BottomContainer>
        <ImagesWrapper>
          <UploadImages images={images} onChangeImages={setImages} />
        </ImagesWrapper>

        <ButtomRightContainer>
          {text && (
            <>
              <span>{textCount}</span>
              <CircularProgressWrapper>
                {text.length <= 280 ? (
                  <CircularProgress
                    variant="determinate"
                    size={20}
                    thickness={5}
                    value={textLimitPercent}
                  />
                ) : null}

                <StyledCircularProgress
                  textLength={text.length > 280}
                  variant="determinate"
                  size={20}
                  thickness={4}
                  value={100}
                />
              </CircularProgressWrapper>
            </>
          )}

          <Button
            onClick={handleClickAddTweet}
            disabled={
              addFormState === AddFormState.LOADING ||
              !text ||
              textLimitPercent > 100
            }
            variant="contained"
          >
            {addFormState === AddFormState.LOADING ? (
              <CircularProgress color="inherit" size={22} />
            ) : (
              `${t("addTweetForm.buttonLabel")}`
            )}
          </Button>
        </ButtomRightContainer>
      </BottomContainer>

      {addFormState === AddFormState.ERROR && (
        <Alert severity="error">
          {t("addTweetForm.alertText")}
          <span>😔</span>
        </Alert>
      )}
    </>
  );
};
