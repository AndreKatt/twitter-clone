import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// local libs
import { HeaderSectionTitle } from "../../components/HeaderSection/HeaderSectionTitle";
// styles
import { HeaderSection } from "../../styles";
import {
  HeaderButton,
  HeaderTitleContainer,
  SearchFieldContainer,
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
          <Typography variant="h6">{title}</Typography>
        </HeaderTitleContainer>
      )}

      {titles && (
        <HeaderSection>
          {titles.map((item) => (
            <HeaderSectionTitle key={item.title.text} title={item.title} />
          ))}
        </HeaderSection>
      )}
    </TweetsHeader>
  );
};
