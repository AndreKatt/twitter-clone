import { Avatar, colors, Typography } from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { useHomeStyles } from "../pages/Home/theme";
import { selectUserState } from "../redux/user/selectors";

interface UserProfileProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const UserSideProfile: React.FC<UserProfileProps> = ({ classes }) => {
  const user = useSelector(selectUserState);
  console.log(user);
  return (
    <div className={classes.profileWrapper}>
      <Avatar className={classes.avatar} />
      <div className={classes.userNameWrapper}>
        <Typography className={classes.userName}>
          <b>{user.currentUser?.fullname}</b>
        </Typography>
        <Typography style={{ color: colors.grey[500] }}>
          {user.currentUser?.username}
        </Typography>
      </div>
      <KeyboardArrowDown className={classes.button} />
    </div>
  );
};
