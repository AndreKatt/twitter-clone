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

import { useHomeStyles } from "../pages/Home/theme";
import { formatDate } from "../utils/formatDate";

interface TweetProps {
  _id: string;
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  fullname: string;
  userName: string;
  // avatarUrl: string;
  createdAt: string;
}

export const Tweet: React.FC<TweetProps> = ({
  _id,
  classes,
  text,
  fullname,
  userName,
  // avatarUrl,
  createdAt,
}): React.ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper
      className={classNames(classes.tweet, classes.tweetWrapper)}
      variant="outlined"
    >
      <div className={classes.tweetHeaderUserContent}>
        <div className={classes.tweetAvatarWrapper}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`Аватарка пользователя ${fullname}`}
            // src={avatarUrl}
          />
        </div>

        <div className={classes.tweetContent}>
          <div className={classes.tweetHeaderWrapper}>
            <div className={classes.tweetTextContent}>
              <Typography>
                <b>{fullname}</b>&nbsp;
                <span className={classes.tweetUserName}>@{userName}</span>
                &nbsp;
                <span className={classes.tweetUserName}>·</span>&nbsp;
                <span className={classes.tweetUserName}>
                  {formatDate(new Date(createdAt))} назад
                </span>
              </Typography>
            </div>
          </div>

          <Link to={`tweet/${_id}`} className={classes.tweetLink}>
            <Typography variant="body1" gutterBottom>
              <span> {text}</span>
            </Typography>
          </Link>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton className={classes.tweetFooterIcon}>
                <ChatBubbleOutline style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton className={classes.tweetFooterIcon}>
                <RepeatOutlined style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton className={classes.tweetFooterIcon}>
                <FavoriteBorderOutlined style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton className={classes.tweetFooterIcon}>
                <ReplySharp style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      <div>
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
          <MenuItem onClick={handleClose}>Удалить твит</MenuItem>
        </Menu>
      </div>
    </Paper>
  );
};
