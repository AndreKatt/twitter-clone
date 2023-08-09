import React from "react";
import { BottomLine, Title, TitleContainer } from "./styles";
import type { HeaderSectionTitleType } from "../../types";

export const HeaderSectionTitle: React.FC<HeaderSectionTitleType> = ({
  title,
}) => {
  return (
    <TitleContainer>
      <Title isactive={title.isActive}>{title.text}</Title>
      {!!title.isActive && <BottomLine />}
    </TitleContainer>
  );
};
