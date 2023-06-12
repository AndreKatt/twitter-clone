import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ModalBlock } from "../ModalBlock/ModalBlock";
import { AddTweetForm } from "../AddTweetForm/AddTweetForm";
import { menuItems } from "./fixtures";
// styles
import {
  AddTweetButton,
  ButtonIcon,
  Label,
  ListItemWrapper,
  LogoIcon,
  LogoIconButton,
  SideMenuList,
  SideMenuListItem,
} from "./styles";

export const SideMenu: React.FC = () => {
  const [visibleAddTweet, setVisibleAddTweet] = useState(false);

  const handleOpenAddTweet = () => {
    setVisibleAddTweet(true);
  };

  const handleCloseAddTweet = () => {
    setVisibleAddTweet(false);
  };

  return (
    <SideMenuList>
      <SideMenuListItem>
        <Link to="/home">
          <LogoIconButton aria-label="" color="primary">
            <LogoIcon />
          </LogoIconButton>
        </Link>
      </SideMenuListItem>

      {menuItems.map((item) => (
        <Link key={item.label} to={item.link}>
          <SideMenuListItem>
            <ListItemWrapper>
              {item.icon}
              <Label variant="h6">{item.label}</Label>
            </ListItemWrapper>
          </SideMenuListItem>
        </Link>
      ))}

      <SideMenuListItem>
        <AddTweetButton
          onClick={handleOpenAddTweet}
          variant="contained"
          color="primary"
        >
          <ButtonIcon />
          <span>Твитнуть</span>
        </AddTweetButton>

        <ModalBlock onClose={handleCloseAddTweet} visible={visibleAddTweet}>
          <div style={{ width: 550 }}>
            <AddTweetForm maxRows={15} />
          </div>
        </ModalBlock>
      </SideMenuListItem>
    </SideMenuList>
  );
};
