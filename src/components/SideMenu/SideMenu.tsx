import React from "react";
import { useState } from "react";
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
import { useSelector } from "react-redux";
import { selectUserState } from "../../redux/currentUser/selectors";
import { StyledLink } from "../../styles";

export const SideMenu: React.FC = () => {
  const [visibleAddTweet, setVisibleAddTweet] = useState(false);
  const { currentUser } = useSelector(selectUserState);
  const menuTitles = menuItems(currentUser?.email);

  const handleOpenAddTweet = () => {
    setVisibleAddTweet(true);
  };

  const handleCloseAddTweet = () => {
    setVisibleAddTweet(false);
  };

  if (currentUser?.email) {
    return (
      <SideMenuList>
        <SideMenuListItem>
          <StyledLink to="/home">
            <LogoIconButton aria-label="" color="primary">
              <LogoIcon />
            </LogoIconButton>
          </StyledLink>
        </SideMenuListItem>

        {menuTitles.map((item) => (
          <StyledLink key={item.label} to={item.link}>
            <SideMenuListItem>
              <ListItemWrapper>
                {item.icon}
                <Label variant="h6">{item.label}</Label>
              </ListItemWrapper>
            </SideMenuListItem>
          </StyledLink>
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
  }

  return null;
};
