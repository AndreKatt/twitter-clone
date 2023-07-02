import React from "react";
import Typography from "@mui/material/Typography";
// local libs
import { Header } from "../../generic/Header/Header";
import { titles } from "../fixtures";
// styles
import {
  ArrowIcon,
  Description,
  IconContainer,
  InnerContainer,
  SettingsContainer,
  TextContainer,
} from "./styles";
import { settings } from "./fixtures";
import { StyledLink } from "../../styles";

export const Settings: React.FC = () => {
  return (
    <>
      <Header variant="elevation" title={titles.settings.main} />
      {settings.map((item) => (
        <StyledLink key={item.title} to={item.link}>
          <SettingsContainer>
            <InnerContainer>
              <IconContainer>{item.icon}</IconContainer>
              <TextContainer>
                <Typography>{item.title}</Typography>
                <Description>{item.description}</Description>
              </TextContainer>
            </InnerContainer>

            <ArrowIcon />
          </SettingsContainer>
        </StyledLink>
      ))}
    </>
  );
};
