import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Search from "@material-ui/icons/Search";
import Twitter from "@material-ui/icons/Twitter";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {
  BookmarkBorderOutlined,
  EmailOutlined,
  HomeOutlined,
  ListAltOutlined,
  MoreHoriz,
  NotificationsNone,
  PermIdentityOutlined,
} from "@material-ui/icons";
import { BorderColorOutlined } from "@material-ui/icons";
import { ModalBlock } from "../ModalBlock/ModalBlock";
import { AddTweetForm } from "../AddTweetForm/AddTweetForm";
//types
import { SideMenuProps } from "./types";

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}): React.ReactElement => {
  const [visibleAddTweet, setVisibleAddTweet] = useState(false);

  const handleOpenAddTweet = () => {
    setVisibleAddTweet(true);
  };

  const handleCloseAddTweet = () => {
    setVisibleAddTweet(false);
  };

  return (
    <ul className={classes.classes.sideMenuList}>
      <li className={classes.classes.sideMenuListItem}>
        <Link to="/home">
          <IconButton
            className={classes.classes.logo}
            aria-label=""
            color="primary"
          >
            <Twitter className={classes.classes.logoIcon} />
          </IconButton>
        </Link>
      </li>
      <li className={classes.classes.sideMenuListItem}>
        <Link to="/home">
          <div>
            <HomeOutlined className={classes.classes.sideMenuListItemIcon} />
            <Typography
              className={classes.classes.sideMenuListItemLabel}
              variant="h6"
            >
              Главная
            </Typography>
          </div>
        </Link>
      </li>
      <li className={classes.classes.sideMenuListItem}>
        <div>
          <Search className={classes.classes.sideMenuListItemIcon} />
          <Typography
            className={classes.classes.sideMenuListItemLabel}
            variant="h6"
          >
            Поиск
          </Typography>
        </div>
      </li>
      <li className={classes.classes.sideMenuListItem}>
        <div>
          <NotificationsNone className={classes.classes.sideMenuListItemIcon} />
          <Typography
            className={classes.classes.sideMenuListItemLabel}
            variant="h6"
          >
            Уведомления
          </Typography>
        </div>
      </li>
      <li className={classes.classes.sideMenuListItem}>
        <div>
          <EmailOutlined className={classes.classes.sideMenuListItemIcon} />
          <Typography
            className={classes.classes.sideMenuListItemLabel}
            variant="h6"
          >
            Сообщения
          </Typography>
        </div>
      </li>
      <li className={classes.classes.sideMenuListItem}>
        <div>
          <BookmarkBorderOutlined
            className={classes.classes.sideMenuListItemIcon}
          />
          <Typography
            className={classes.classes.sideMenuListItemLabel}
            variant="h6"
          >
            Закладки
          </Typography>
        </div>
      </li>
      <li className={classes.classes.sideMenuListItem}>
        <div>
          <ListAltOutlined className={classes.classes.sideMenuListItemIcon} />
          <Typography
            className={classes.classes.sideMenuListItemLabel}
            variant="h6"
          >
            Список
          </Typography>
        </div>
      </li>
      <li className={classes.classes.sideMenuListItem}>
        <div>
          <PermIdentityOutlined
            className={classes.classes.sideMenuListItemIcon}
          />
          <Typography
            className={classes.classes.sideMenuListItemLabel}
            variant="h6"
          >
            Профиль
          </Typography>
        </div>
      </li>
      <li className={classes.classes.sideMenuListItem}>
        <div>
          <MoreHoriz className={classes.classes.sideMenuListItemIcon} />
          <Typography
            className={classes.classes.sideMenuListItemLabel}
            variant="h6"
          >
            Еще
          </Typography>
        </div>
      </li>
      <li className={classes.classes.sideMenuListItem}>
        <Button
          onClick={handleOpenAddTweet}
          className={classes.classes.sideMenuTweetButton}
          variant="contained"
          color="primary"
        >
          <BorderColorOutlined className={classes.classes.sideMenuButtonIcon} />

          <span>Твитнуть</span>
        </Button>
        <ModalBlock onClose={handleCloseAddTweet} visible={visibleAddTweet}>
          <div style={{ width: 550 }}>
            <AddTweetForm maxRows={15} classes={classes} />
          </div>
        </ModalBlock>
      </li>
    </ul>
  );
};
