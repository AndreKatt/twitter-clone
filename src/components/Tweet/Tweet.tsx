import React from "react";
import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "@mui/material/Menu";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";
import {
  FavoriteBorderOutlined,
  RepeatOutlined,
  ReplySharp,
} from "@material-ui/icons";

import { formatDate } from "../../utils/formatDate";
import { useAppDispatch } from "../../redux/store";
import { deleteTweet } from "../../redux/tweets/asyncActions";
import { ImagesList } from "../ImagesList/ImagesList";
// types
import type { TweetProps } from "./types";

export const Tweet: React.FC<TweetProps> = ({
  _id,
  classes,
  text,
  fullname,
  userName,
  images,
  // avatarUrl,
  createdAt,
}): React.ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteOne = async () => {
    if (window.confirm("Вы действительно хотите удалить этот твит?")) {
      await dispatch(deleteTweet(_id));
      handleClose();
    }
  };

  return (
    <Paper
      className={classNames(
        classes.classes.tweet,
        classes.classes.tweetWrapper
      )}
      variant="outlined"
    >
      <div className={classes.classes.tweetHeaderUserContent}>
        <div className={classes.classes.tweetAvatarWrapper}>
          <Avatar
            className={classes.classes.tweetAvatar}
            alt={`Аватарка пользователя ${fullname}`}
            // src={avatarUrl}
          />
        </div>

        <div className={classes.classes.tweetContent}>
          <div className={classes.classes.tweetHeaderWrapper}>
            <div className={classes.classes.tweetTextContent}>
              <Typography>
                <b>{fullname}</b>&nbsp;
                <span className={classes.classes.tweetUserName}>
                  @{userName}
                </span>
                &nbsp;
                <span className={classes.classes.tweetUserName}>·</span>&nbsp;
                <span className={classes.classes.tweetUserName}>
                  {formatDate(new Date(createdAt))} назад
                </span>
              </Typography>
            </div>
          </div>

          <Link to={`tweet/${_id}`} className={classes.classes.tweetLink}>
            <Typography variant="body1" gutterBottom>
              <span> {text}</span>
            </Typography>
            {images && <ImagesList images={images} classes={classes} />}
          </Link>
          <div className={classes.classes.tweetFooter}>
            <div>
              <IconButton className={classes.classes.tweetFooterIcon}>
                <ChatBubbleOutline style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton className={classes.classes.tweetFooterIcon}>
                <RepeatOutlined style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton className={classes.classes.tweetFooterIcon}>
                <FavoriteBorderOutlined style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton className={classes.classes.tweetFooterIcon}>
                <ReplySharp style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.classes.tweetMenuButton}>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Редактировать</MenuItem>
          <MenuItem onClick={deleteOne}>Удалить твит</MenuItem>
        </Menu>
      </div>
    </Paper>
  );
};
