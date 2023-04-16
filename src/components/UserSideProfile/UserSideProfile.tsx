import React from "react";
import { useSelector } from "react-redux";
import { KeyboardArrowDown } from "@material-ui/icons";
import { Avatar, colors, Typography } from "@material-ui/core";
import { selectUserState } from "../../redux/user/selectors";
//types
import type { UserProfileProps } from "./types";

export const UserSideProfile: React.FC<UserProfileProps> = ({ classes }) => {
  const user = useSelector(selectUserState);

  return (
    <div className={classes.classes.profileWrapper}>
      <Avatar className={classes.classes.avatar} />
      <div className={classes.classes.userNameWrapper}>
        <Typography className={classes.classes.userName}>
          <b>{user.currentUser?.fullname}</b>
        </Typography>
        <Typography style={{ color: colors.grey[500] }}>
          {user.currentUser?.username}
        </Typography>
      </div>
      <KeyboardArrowDown className={classes.classes.button} />
    </div>
  );
};
