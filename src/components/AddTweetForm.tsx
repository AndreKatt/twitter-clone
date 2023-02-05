import React from "react";
import classNames from "classnames";
import { useState } from "react";
import { useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Alert, TextareaAutosize } from "@mui/material";
import { selectAddFormState } from "../redux/tweets/selectors";
import { addTweet, uploadFile } from "../redux/tweets/asyncActions";
import { setAddFormState } from "../redux/tweets/slice";
import { AddFormState } from "../redux/tweets/types";
import { useAppDispatch } from "../redux/store";
import { UploadImages } from "./UploadImages";

import { useHomeStyles } from "../pages/Home/theme";

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
  maxRows?: number;
}

export interface UploadedObject {
  blobUrl: string;
  file: File;
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
  maxRows,
}): React.ReactElement => {
  const dispatch = useAppDispatch();
  const addFormState = useSelector(selectAddFormState);
  const [text, setText] = useState<string>("");
  const [images, setImages] = useState<UploadedObject[]>([]);
  const textLimitPercent = (text.length / 280) * 100;
  const textCount = 280 - text.length;

  const handleChangeTextarea = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
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
    <div>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt="Ваша аватарка"
          src="https://images.unsplash.com/photo-1558499932-9609acb6f443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <TextareaAutosize
          onChange={handleChangeTextarea}
          className={classes.addFormTextarea}
          placeholder="Что происходит?"
          value={text}
          maxRows={maxRows}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div
          className={classNames(
            classes.tweetFooter,
            classes.addFormBottomActions
          )}
        >
          <UploadImages images={images} onChangeImages={setImages} />
        </div>
        <div className={classes.addFormButtomRight}>
          {text && (
            <>
              <span>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
                {text.length <= 280 ? (
                  <CircularProgress
                    variant="determinate"
                    size={20}
                    thickness={5}
                    value={textLimitPercent}
                  />
                ) : null}

                <CircularProgress
                  style={
                    text.length > 280
                      ? { color: "red" }
                      : { color: "rgba(0, 0, 0, 0.1)" }
                  }
                  variant="determinate"
                  size={20}
                  thickness={4}
                  value={100}
                />
              </div>
            </>
          )}

          <Button
            onClick={handleClickAddTweet}
            disabled={
              addFormState === AddFormState.LOADING ||
              !text ||
              textLimitPercent > 100
            }
            color="primary"
            variant="contained"
          >
            {addFormState === AddFormState.LOADING ? (
              <CircularProgress color="inherit" size={22} />
            ) : (
              "Твитнуть"
            )}
          </Button>
        </div>
      </div>
      {addFormState === AddFormState.ERROR && (
        <Alert severity="error">
          Ошибка при добавлении твита <span>😔</span>
        </Alert>
      )}
    </div>
  );
};
