import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  ClickAwayListener,
  Grow,
  ListItemIcon,
  ListItemText,
  MenuList,
  Paper,
} from "@mui/material";
// local libs
import { ImagesList } from "../ImagesList/ImagesList";
import { formatDate } from "../../utils/formatDate";
import { useAppDispatch } from "../../redux/store";
import { deleteTweet } from "../../redux/tweets/asyncActions";
import { footerIcons, menuItems } from "./fixtures";
// styles
import {
  TextContentContainer,
  TextContentWrapper,
  HeaderText,
  TweetAvatar,
  FooterIcon,
} from "../../styles";
import {
  FooterWrapper,
  FooterContainer,
  HeaderContainer,
  HeaderTextContainer,
  MenuButtonContainer,
  TweetContainer,
  DeleteMenuText,
  TweetPopper,
} from "./styles";
// types
import type { TweetProps } from "./types";

export const Tweet: React.FC<TweetProps> = ({
  _id,
  text,
  fullname,
  userName,
  images,
  // avatarUrl,
  createdAt,
}): React.ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch();

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
    if (window.confirm("Вы действительно хотите удалить этот твит?")) {
      await dispatch(deleteTweet(_id));
      handleClose();
    }
  };

  return (
    <TweetContainer variant="outlined">
      <HeaderContainer>
        <>
          <TweetAvatar
            alt={`Аватарка пользователя ${fullname}`}
            // src={avatarUrl}
          />
        </>

        <TextContentContainer>
          <HeaderTextContainer>
            <TextContentWrapper>
              <Typography>
                <b>{fullname}</b>&nbsp;
                <HeaderText>@{userName}</HeaderText>
                &nbsp;
                <HeaderText>·</HeaderText>&nbsp;
                <HeaderText>{formatDate(new Date(createdAt))} назад</HeaderText>
              </Typography>
            </TextContentWrapper>
          </HeaderTextContainer>

          <Link to={`tweet/${_id}`}>
            <Typography variant="body1" gutterBottom>
              <span> {text}</span>
            </Typography>
            {images && <ImagesList images={images} />}
          </Link>

          <FooterWrapper>
            {footerIcons.map((item) => (
              <FooterContainer key={item.id}>
                <FooterIcon>{item.icon}</FooterIcon>
                <Typography>{item.label}</Typography>
              </FooterContainer>
            ))}
          </FooterWrapper>
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
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "right top",
            }}
          >
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
          </Grow>
        )}
      </TweetPopper>
    </TweetContainer>
  );
};
