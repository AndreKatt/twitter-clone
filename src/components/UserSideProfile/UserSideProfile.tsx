import React, { useState } from "react";
import { useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { selectUserState } from "../../redux/user/selectors";
// styles
import {
  Button,
  Fullname,
  ProfileAvatar,
  ProfileContainer,
  TextContainer,
  Username,
} from "./styles";

export const UserSideProfile: React.FC = () => {
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
    <div className="sideProfileContainer">
      <Menu
        id="profile-menu"
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

      <ProfileContainer
        aria-label="more"
        aria-controls={open ? "profile-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ProfileAvatar />
        <TextContainer>
          <Fullname>
            <b>{user.currentUser?.fullname}</b>
          </Fullname>
          <Username>{user.currentUser?.username}</Username>
        </TextContainer>

        <Button>
          <KeyboardArrowDownIcon />
        </Button>
      </ProfileContainer>
    </div>
  );
};
