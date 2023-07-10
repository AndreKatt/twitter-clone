import React from "react";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
// local libs
import { Header } from "../../generic/Header/Header";
import { getTitles } from "../fixtures";
import { getSettings } from "./fixtures";
// styles
import {
  ArrowIcon,
  Description,
  IconContainer,
  InnerContainer,
  SettingsContainer,
  TextContainer,
} from "./styles";
import { StyledLink } from "../../styles";

export const Settings: React.FC = () => {
  const { t } = useTranslation();
  const title = getTitles(t).settings.main;
  const settings = getSettings(t);

  return (
    <>
      <Header variant="elevation" title={title} t={t} />
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
