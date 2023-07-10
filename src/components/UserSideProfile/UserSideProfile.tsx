import React, { useState } from "react";
import { useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import Grow from "@mui/material/Grow";
import { Divider } from "@mui/material";
// local libs
import { selectUserState } from "../../redux/currentUser/selectors";
// styles
import {
  Button,
  Fullname,
  ProfileAvatar,
  ProfileContainer,
  TextContainer,
  Username,
  MenuPopper,
} from "./styles";
// types
import { i18nProps } from "../../types";

export const UserSideProfile: React.FC<i18nProps> = ({ t }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const user = useSelector(selectUserState);

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setAnchorEl(null);
    } else if (event.key === "Escape") {
      setAnchorEl(null);
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="sideProfileContainer">
      <ProfileContainer
        aria-label="more"
        id="profile"
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

      <MenuPopper
        open={open}
        anchorEl={anchorEl}
        role={undefined}
        placement="top-end"
        transition
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "right bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="profile-menu"
                  aria-labelledby="profile"
                  onKeyDown={handleListKeyDown}
                >
                  <Divider />
                  <MenuItem>{t("userSideProfile.menuLabel1")}</MenuItem>
                  <MenuItem>
                    {t("userSideProfile.menuLabel2")}
                    <>
                      <br />
                    </>
                    {`${user.currentUser?.email}`}
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </MenuPopper>
    </div>
  );
};
