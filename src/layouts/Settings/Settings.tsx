import React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
// local libs
import { Header } from "../../generic/Header/Header";
import { getTitles } from "../../utils/getTitles";
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
  const { settings } = getTitles(t);
  const options = getSettings(t);

  return (
    <>
      <Header variant="elevation" title={settings} t={t} />
      {options.map((item) => (
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
