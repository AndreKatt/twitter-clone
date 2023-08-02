import React from "react";
import { getFooterIcons } from "./fixtures";
// styles
import { FooterIcon, FooterWrapper, FooterContainer } from "./styles";
// types
import type { TweetFooterProps } from "./types";

export const TweetFooter: React.FC<TweetFooterProps> = ({
  likes = [],
  retweets = [],
  replies = [],
  kind,
}) => {
  const footerIcons = getFooterIcons(likes, retweets, replies);

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
