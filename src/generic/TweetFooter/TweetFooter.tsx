import React from "react";
import { footerIcons } from "./fixtures";
// styles
import { FooterIcon, FooterWrapper, FooterContainer } from "./styles";
// types
import { TweetFooterProps } from "./types";

export const TweetFooter: React.FC<TweetFooterProps> = ({ kind }) => {
  return (
    <FooterWrapper kind={kind}>
      {footerIcons.map((item) => (
        <FooterContainer key={item.id} kind={kind}>
          <FooterIcon kind={kind}>{item.icon}</FooterIcon>
          <span>{item.label}</span>
        </FooterContainer>
      ))}
    </FooterWrapper>
  );
};
