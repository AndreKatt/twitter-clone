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

export const Header: React.FC<HeaderProps> = ({
  variant,
  searchField,
  icon,
  title,
  titles,
}) => {
  const nav = useNavigate();

  return (
    <TweetsHeader variant={variant}>
      {searchField && (
        <SearchFieldContainer>
          <SearchTextField />
        </SearchFieldContainer>
      )}

      <HeaderTitleContainer>
        {icon && (
          <HeaderButton onClick={() => nav(-1)} color="primary">
            <ArrowBackIcon />
          </HeaderButton>
        )}
        <Typography variant="h6">{title}</Typography>
      </HeaderTitleContainer>

      {titles && (
        <HeaderSection>
          {titles.map((item) => (
            <HeaderSectionTitle key={item.item.title} item={item.item} />
          ))}
        </HeaderSection>
      )}
    </TweetsHeader>
  );
};
