import React from "react";
import { BottomLine, Title, TitleContainer } from "./styles";
import { HeaderSectionTitleType } from "../../types";

export const HeaderSectionTitle: React.FC<HeaderSectionTitleType> = ({
  item,
}) => {
  return (
    <TitleContainer>
      <Title>{item.title}</Title>
      {item.active && <BottomLine />}
    </TitleContainer>
  );
};
