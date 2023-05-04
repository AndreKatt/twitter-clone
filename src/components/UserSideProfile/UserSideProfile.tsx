import React, { useState } from "react";
import { useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { KeyboardArrowDown } from "@material-ui/icons";
import { Avatar, colors, Typography } from "@material-ui/core";
import { selectUserState } from "../../redux/user/selectors";
//types
import type { UserProfileProps } from "./types";
import { IconButton } from "@mui/material";

export const UserSideProfile: React.FC<UserProfileProps> = ({ classes }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const user = useSelector(selectUserState);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="sideProfileContainer"
      // style={{ position: "relative", height: 500 }}
    >
      <Menu
        // container={document.querySelector(".sideProfileContainer")}
        id="profile-menu"
        // MenuListProps={{
        //   "aria-labelledby": "long-button",
        // }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
          Добавить существующую
          <>
            <br />
          </>
          учетную запись
        </MenuItem>
        <MenuItem>
          Выйти из учетной записи
          <>
            <br />
          </>
          {`${user.currentUser?.email}`}
        </MenuItem>
      </Menu>

      <div
        className={classes.classes.profileWrapper}
        aria-label="more"
        aria-controls={open ? "profile-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar className={classes.classes.avatar} />
        <div className={classes.classes.userNameWrapper}>
          <Typography className={classes.classes.userName}>
            <b>{user.currentUser?.fullname}</b>
          </Typography>
          <Typography
            className={classes.classes.userName}
            style={{ color: colors.grey[500] }}
          >
            {user.currentUser?.username}
          </Typography>
        </div>

        <IconButton className={classes.classes.button}>
          <KeyboardArrowDown />
        </IconButton>
      </div>
    </div>
  );
};
