import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// local libs
import { useAppDispatch } from "../../redux/store";
import { deleteTweet } from "../../redux/tweets/asyncActions";
import { getPublicationMenuItems } from "../../utils/getPublicationMenuItems";
// styles
import {
  MenuButtonContainer,
  DeleteMenuText,
  TweetPopper,
  StyledGrow,
} from "./styles";
// types
import type { TweetActionsMenuProps } from "./types";
import type { i18nProps } from "../../types";

export const TweetActionsMenu: React.FC<TweetActionsMenuProps & i18nProps> = ({
  id,
  t,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch();

  const menuItems = getPublicationMenuItems(t);

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setAnchorEl(null);
    } else if (event.key === "Escape") {
      setAnchorEl(null);
    }
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const deleteOne = async () => {
    if (window.confirm(`${t("publication.confirm")}`)) {
      await dispatch(deleteTweet(id));
      handleClose();
    }
  };

  return (
    <>
      <MenuButtonContainer>
        <IconButton
          aria-label="more"
          id="more-button"
          aria-controls={open ? "more-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
      </MenuButtonContainer>

      <TweetPopper
        open={open}
        anchorEl={anchorEl}
        role={undefined}
        placement="bottom-end"
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <StyledGrow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="more-menu"
                  aria-labelledby="more-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={deleteOne}>
                    <ListItemIcon>{menuItems.delete.icon}</ListItemIcon>
                    <DeleteMenuText>{menuItems.delete.label}</DeleteMenuText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>{menuItems.pin.icon}</ListItemIcon>
                    <ListItemText>{menuItems.pin.label}</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>{menuItems.edit.icon}</ListItemIcon>
                    <ListItemText>{menuItems.edit.label}</ListItemText>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </StyledGrow>
        )}
      </TweetPopper>
    </>
  );
};
