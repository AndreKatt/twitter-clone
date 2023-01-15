import React, { useState } from "react";
import classNames from "classnames";
import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
  TextareaAutosize,
} from "@material-ui/core";
import { ImageOutlined, SentimentSatisfiedOutlined } from "@material-ui/icons";
import { useHomeStyles } from "../pages/Home/theme";
import { useDispatch } from "react-redux";
import { fetchAddTweet } from "../store/ducks/tweets/actionCreatores";

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
  maxRows?: number;
}
export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
  maxRows,
}): React.ReactElement => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const textLimitPercent = (text.length / 280) * 100;
  const textCount = 280 - text.length;

  const handleChangeTextarea = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    dispatch(fetchAddTweet(text));
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
            disabled={textLimitPercent > 100}
            color="primary"
            variant="contained"
          >
            Твитнуть
          </Button>
        </div>
      </div>
    </div>
  );
};
