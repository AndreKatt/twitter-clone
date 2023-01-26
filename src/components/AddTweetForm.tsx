import React from "react";
import { useState } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import Alert from "@mui/material/Alert";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ImageOutlined, SentimentSatisfiedOutlined } from "@material-ui/icons";

import { AddFormState } from "../store/ducks/tweets/contracts/state";
import { selectAddFormState } from "../store/ducks/tweets/selectors";
import { fetchAddTweet } from "../store/ducks/tweets/actionCreatores";

import { useHomeStyles } from "../pages/Home/theme";

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
  maxRows?: number;
}
export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
  maxRows,
}): React.ReactElement => {
  const dispatch = useDispatch();
  const addFormState = useSelector(selectAddFormState);
  const [text, setText] = useState<string>("");
  const textLimitPercent = (text.length / 280) * 100;
  const textCount = 280 - text.length;

  const handleChangeTextarea = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const currentUser = {
    text: text,
    user: {
      email: "katy1998@mail.ru",
      username: "katty",
    },
  };
  const handleClickAddTweet = (): void => {
    dispatch(fetchAddTweet(currentUser));
    setText("");
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
          <IconButton color="primary">
            <ImageOutlined style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <SentimentSatisfiedOutlined style={{ fontSize: 26 }} />
          </IconButton>
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
