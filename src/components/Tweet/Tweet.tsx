import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// local libs
import { ImagesList } from "../ImagesList/ImagesList";
import { formatDate } from "../../utils/formatDate";
import { useAppDispatch } from "../../redux/store";
import { deleteTweet } from "../../redux/tweets/asyncActions";
// styles
import {
  TextContentContainer,
  TextContentWrapper,
  HeaderText,
  TweetAvatar,
  FooterIcon,
} from "../../styles";
import {
  AvatarWrapper,
  FooterContainer,
  HeaderContainer,
  HeaderTextContainer,
  MenuButtonContainer,
  TweetContainer,
} from "./styles";
// types
import type { TweetProps } from "./types";
import { footerIcons, menuText } from "./fixtures";

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
        <AvatarWrapper>
          <TweetAvatar
            alt={`Аватарка пользователя ${fullname}`}
            // src={avatarUrl}
          />
        </AvatarWrapper>

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

          <FooterContainer>
            {footerIcons.map((item) => (
              <div key={item.id}>
                <FooterIcon>{item.icon}</FooterIcon>
                <span>{item.label}</span>
              </div>
            ))}
          </FooterContainer>
        </TextContentContainer>
      </HeaderContainer>

      <MenuButtonContainer>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>{menuText[0]}</MenuItem>
          <MenuItem onClick={deleteOne}>{menuText[1]}</MenuItem>
        </Menu>
      </MenuButtonContainer>
    </TweetContainer>
  );
};
