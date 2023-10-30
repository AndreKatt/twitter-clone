import React, { useState } from "react";
import { useSelector } from "react-redux";
// local libs
import { ModalBlock } from "../ModalBlock/ModalBlock";
import { AddTweetForm } from "../AddTweetForm/AddTweetForm";
import { selectUserState } from "../../redux/currentUser/selectors";
import { menuItems } from "./fixtures";
// styles
import {
  AddTweetButton,
  AddTweetFormWrapper,
  ButtonIcon,
  Label,
  ListItemWrapper,
  LogoIcon,
  LogoIconButton,
  SideMenuList,
  SideMenuListItem,
} from "./styles";
import { StyledLink } from "../../styles";
// types
import type { i18nProps } from "../../types";

export const SideMenu: React.FC<i18nProps> = ({ t }) => {
  const [visibleAddTweet, setVisibleAddTweet] = useState(false);
  const { currentUser } = useSelector(selectUserState);

  const menuTitles = menuItems(currentUser?.email, t);

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
            <span>{t("sideMenu.buttonLabel")}</span>
          </AddTweetButton>

          <ModalBlock onClose={handleCloseAddTweet} visible={visibleAddTweet}>
            <AddTweetFormWrapper>
              <AddTweetForm type="tweet" maxRows={15} minHeight={140} divider />
            </AddTweetFormWrapper>
          </ModalBlock>
        </SideMenuListItem>
      </SideMenuList>
    );
  }

  return null;
};
