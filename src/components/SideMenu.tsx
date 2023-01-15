import React, { useState } from "react";

import { Button, IconButton, Typography } from "@material-ui/core";
import {
  Twitter,
  Search,
  NotificationsNone,
  ListAltOutlined,
  PermIdentityOutlined,
  BookmarkBorderOutlined,
  EmailOutlined,
  MoreHoriz,
} from "@material-ui/icons";
import { useHomeStyles } from "../pages/Home/theme";
import { ModalBlock } from "./ModalBlock";
import { AddTweetForm } from "./AddTweetForm";
import { Link } from "react-router-dom";

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

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
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <Link to="/home">
          <IconButton className={classes.logo} aria-label="" color="primary">
            <Twitter className={classes.logoIcon} />
          </IconButton>
        </Link>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <Search className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Поиск
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationsNone className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Уведомления
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <EmailOutlined className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Сообщения
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkBorderOutlined className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Закладки
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListAltOutlined className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Список
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <PermIdentityOutlined className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Профиль
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MoreHoriz className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Еще
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          onClick={handleOpenAddTweet}
          className={classes.sideMenuTweetButton}
          variant="contained"
          color="primary"
          fullWidth
        >
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
