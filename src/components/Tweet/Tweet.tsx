import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tooltip from "@mui/material/Tooltip";
// local libs
import { ImagesList } from "../../generic/ImagesList/ImagesList";
import { TweetFooter } from "../../generic/TweetFooter/TweetFooter";
import { useAppDispatch } from "../../redux/store";
import { deleteTweet } from "../../redux/tweets/asyncActions";
import { formatTweetInfoDate } from "../../utils/formatDate";
import { stringAvatar } from "../../utils/stringAvatar";
import { getAvatarUrl } from "../../utils/getAvatarUrl";
import { getMenuItems } from "./fixtures";
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
  TweetTextWrapper,
} from "./styles";
// types
import type { TweetProps } from "./types";
import type { i18nProps } from "../../types";

export const Tweet: React.FC<TweetProps & i18nProps> = ({
  tweetData,
  t,
}): React.ReactElement => {
  const [avatarUrl, setavatarUrl] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const currentUserEmail = localStorage.getItem("email");
  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch();
  const { _id, text, images, user, createdAt } = tweetData;

  const isCurrentUser = currentUserEmail === tweetData.user.email;
  const userLink = `/${user.email}/tweets`;
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

  useEffect(() => {
    const getUrl = async () => {
      const url = await getAvatarUrl(user.email);
      setavatarUrl(url);
    };

    getUrl();
    // eslint-disable-next-line
  }, []);

  return (
    <TweetContainer variant="outlined">
      <HeaderContainer>
        <StyledLink to={userLink}>
          <Tooltip arrow title={user.fullname}>
            <UserAvatar
              alt={`Аватарка пользователя ${user.fullname}`}
              src={avatarUrl}
              {...stringAvatar(user.username)}
            />
          </Tooltip>
        </StyledLink>

        <TextContentContainer>
          <StyledLink to={userLink}>
            <HeaderTextContainer>
              <TextContentWrapper>
                <Typography>
                  <b>{user.username}</b>&nbsp;
                  <HeaderText>@{user.fullname}</HeaderText>
                  &nbsp;
                  <HeaderText>·</HeaderText>&nbsp;
                  <HeaderText>
                    {`${formatTweetInfoDate(new Date(createdAt))} ${t(
                      "tweet.dateText"
                    )}`}
                  </HeaderText>
                </Typography>
              </TextContentWrapper>
            </HeaderTextContainer>
          </StyledLink>

          <StyledLink to={`/tweet/${_id}`}>
            <TweetTextWrapper variant="body1" gutterBottom>
              <span>{text}</span>
            </TweetTextWrapper>
            {images && <ImagesList type="tweet" images={images} />}
          </StyledLink>

          <TweetFooter tweetData={tweetData} kind="tweet" />
        </TextContentContainer>
      </HeaderContainer>

      {isCurrentUser && (
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
                        <DeleteMenuText>
                          {menuItems.delete.label}
                        </DeleteMenuText>
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
      )}
    </TweetContainer>
  );
};
