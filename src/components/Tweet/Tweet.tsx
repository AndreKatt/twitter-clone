import React from "react";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  ClickAwayListener,
  ListItemIcon,
  ListItemText,
  MenuList,
  Paper,
} from "@mui/material";
// local libs
import { ImagesList } from "../ImagesList/ImagesList";
import { TweetFooter } from "../../generic/TweetFooter/TweetFooter";
import { formatTweetDate } from "../../utils/formatDate";
import { useAppDispatch } from "../../redux/store";
import { deleteTweet } from "../../redux/tweets/asyncActions";
import { getMenuItems } from "./fixtures";
import { stringAvatar } from "../../utils/stringAvatar";
// styles
import {
  TextContentContainer,
  TextContentWrapper,
  HeaderText,
  StyledLink,
  UserAvatar,
} from "../../styles";
import {
  HeaderContainer,
  HeaderTextContainer,
  MenuButtonContainer,
  TweetContainer,
  DeleteMenuText,
  TweetPopper,
  StyledGrow,
} from "./styles";
// types
import type { TweetProps } from "./types";
import type { i18nProps } from "../../types";

export const Tweet: React.FC<TweetProps & i18nProps> = ({
  tweetData,
  t,
}): React.ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch();
  const { _id, text, images, user, createdAt } = tweetData;

  const menuItems = getMenuItems(t);

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setAnchorEl(null);
    } else if (event.key === "Escape") {
      setAnchorEl(null);
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteOne = async () => {
    if (window.confirm(`${t("tweet.confirm")}`)) {
      await dispatch(deleteTweet(_id));
      handleClose();
    }
  };

  return (
    <TweetContainer variant="outlined">
      <HeaderContainer>
        <StyledLink to={`/home/${user.email}`}>
          <UserAvatar
            alt={`Аватарка пользователя ${user.fullname}`}
            {...stringAvatar(user.username)}
            // src={avatarUrl}
          />
        </StyledLink>

        <TextContentContainer>
          <StyledLink to={`/home/${user.email}`}>
            <HeaderTextContainer>
              <TextContentWrapper>
                <Typography>
                  <b>{user.fullname}</b>&nbsp;
                  <HeaderText>@{user.username}</HeaderText>
                  &nbsp;
                  <HeaderText>·</HeaderText>&nbsp;
                  <HeaderText>
                    {`${formatTweetDate(new Date(createdAt))} ${t(
                      "tweet.dateText"
                    )}`}
                  </HeaderText>
                </Typography>
              </TextContentWrapper>
            </HeaderTextContainer>
          </StyledLink>

          <StyledLink to={`/home/tweet/${_id}`}>
            <Typography variant="body1" gutterBottom>
              <span> {text}</span>
            </Typography>
            {images && <ImagesList images={images} />}
          </StyledLink>

          <TweetFooter tweetData={tweetData} kind="tweet" />
        </TextContentContainer>
      </HeaderContainer>

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
    </TweetContainer>
  );
};
