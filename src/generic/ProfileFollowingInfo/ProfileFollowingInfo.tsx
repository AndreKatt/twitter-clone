import React from "react";
// styles
import { StyledLink } from "../../styles";
import { FollowInfo, Count } from "./styles";
// types
import type { ProfileFollowingProps } from "./types";
import type { i18nProps } from "../../types";

export const ProfileFollowingInfo: React.FC<
  ProfileFollowingProps & i18nProps
> = ({ type, userData, t }) => {
  return (
    <FollowInfo>
      <StyledLink to={type}>
        <Count>{userData[type].length + " "}</Count>
        {t(`layouts.sections.${type}`)}
      </StyledLink>
    </FollowInfo>
  );
};
