import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert } from "@mui/material";
import { UploadImages } from "../UploadImages/UploadImages";
// redux
import { selectAddFormState } from "../../redux/tweets/selectors";
import { addTweet, uploadFile } from "../../redux/tweets/asyncActions";
import { setAddFormState } from "../../redux/tweets/slice";
import { AddFormState } from "../../redux/tweets/types";
import { useAppDispatch } from "../../redux/store";
// styles
import {
  BodyContainer,
  BottomContainer,
  ImagesWrapper,
  ButtomRightContainer,
  CircularProgressWrapper,
  AddTweetAvatar,
  Textarea,
  StyledCircularProgress,
} from "./styles";
//types
import type { AddTweetFormProps } from "./types";
import type { UploadedObject } from "../../types";
import { selectCurrentUser } from "../../redux/currentUser/selectors";
import { StyledLink } from "../../styles";

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  maxRows,
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
      const currentUser = {
        text: text,
        user: {
          email: email,
          fullname: fullname,
          username: username,
        },
      };
      await dispatch(uploadFile(images[0].file));
      await dispatch(addTweet(currentUser));
      setText("");
    }

    setAddFormState(AddFormState.ERROR);
  };

  return (
    <>
      <BodyContainer>
        <StyledLink to={`/home/${user?.email}`}>
          <AddTweetAvatar
            alt="Ваша аватарка"
            src="https://images.unsplash.com/photo-1558499932-9609acb6f443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </StyledLink>
        <Textarea
          onChange={handleChangeTextarea}
          placeholder={t("addTweetForm.placeholder")}
          value={text}
          maxRows={maxRows}
        />
      </BodyContainer>

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
