import React from "react";

import { IconButton, Typography } from "@material-ui/core";
import {
  Twitter,
  Search,
  NotificationsNone,
  ListAltOutlined,
  PermIdentityOutlined,
  BookmarkBorderOutlined,
  EmailOutlined,
} from "@material-ui/icons";
import { useHomeStyles } from "../pages/Home";

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}): React.ReactElement => {
  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <IconButton className={classes.logo} aria-label="" color="primary">
          <Twitter className={classes.logoIcon} />
        </IconButton>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <IconButton aria-label="">
            <Search className={classes.sideMenuListItemIcon} />
          </IconButton>
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Поиск
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <IconButton aria-label="">
            <NotificationsNone className={classes.sideMenuListItemIcon} />
          </IconButton>
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Уведомления
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <IconButton aria-label="">
            <EmailOutlined className={classes.sideMenuListItemIcon} />
          </IconButton>
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Сообщения
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <IconButton aria-label="">
            <BookmarkBorderOutlined className={classes.sideMenuListItemIcon} />
          </IconButton>
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Закладки
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <IconButton aria-label="">
            <ListAltOutlined className={classes.sideMenuListItemIcon} />
          </IconButton>
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Список
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <IconButton aria-label="">
            <PermIdentityOutlined className={classes.sideMenuListItemIcon} />
          </IconButton>
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Профиль
          </Typography>
        </div>
      </li>
    </ul>
  );
};
