import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// local libs
import { HeaderSectionTitle } from "../../components/HeaderSection/HeaderSectionTitle";
// styles
import { HeaderSection, StyledLink } from "../../styles";
import {
  HeaderButton,
  HeaderTitleContainer,
  SearchFieldContainer,
  SecondTitle,
  TweetsHeader,
} from "./styles";
// types
import { HeaderProps } from "./types";
import { SearchTextField } from "../../components/SearchTextField/SearchTextField";
import { i18nProps } from "../../types";

export const Header: React.FC<HeaderProps & i18nProps> = ({
  variant,
  searchField,
  icon,
  title,
  secondText,
  titles,
  t,
}) => {
  const nav = useNavigate();

  return (
    <TweetsHeader variant={variant}>
      {searchField && (
        <SearchFieldContainer>
          <SearchTextField t={t} />
        </SearchFieldContainer>
      )}

      {title && (
        <HeaderTitleContainer>
          {icon && (
            <HeaderButton onClick={() => nav(-1)} color="primary">
              <ArrowBackIcon />
            </HeaderButton>
          )}
          <div>
            <Typography variant="h6">{title}</Typography>
            {secondText && <SecondTitle>{secondText}</SecondTitle>}
          </div>
        </HeaderTitleContainer>
      )}

      {titles && (
        <HeaderSection>
          {titles.map((item) => (
            <StyledLink key={item.title.text} to={item.title.link || "#"}>
              <HeaderSectionTitle key={item.title.text} title={item.title} />
            </StyledLink>
          ))}
        </HeaderSection>
      )}
    </TweetsHeader>
  );
};
