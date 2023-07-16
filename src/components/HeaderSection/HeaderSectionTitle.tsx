import React from "react";
import { BottomLine, Title, TitleContainer } from "./styles";
import { HeaderSectionTitleType } from "../../types";

export const HeaderSectionTitle: React.FC<HeaderSectionTitleType> = ({
  title,
}) => {
  return (
    <TitleContainer>
      <Title isActive={title.isActive}>{title.text}</Title>
      {title.isActive && <BottomLine />}
    </TitleContainer>
  );
};
