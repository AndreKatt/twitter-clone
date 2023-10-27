import React from "react";
import Tooltip from "@mui/material/Tooltip";
// local libs
import { stringAvatar } from "../../utils/stringAvatar";
// styles
import { AvatarWrapper, StyledProfileAvatar } from "./style";
// types
import type { ProfileAvatarProps } from "./types";
import type { i18nProps } from "../../types";

export const ProfileAvatar: React.FC<ProfileAvatarProps & i18nProps> = ({
  isCurrentUser,
  user,
  t,
}) => {
  return (
    <AvatarWrapper>
      {isCurrentUser ? (
        <Tooltip
          arrow
          placement="right-end"
          title={t("layouts.profile.tooltip")}
        >
          <StyledProfileAvatar
            src={user.avatarUrl}
            {...stringAvatar(user.fullname)}
          />
        </Tooltip>
      ) : (
        <StyledProfileAvatar
          src={user.avatarUrl}
          {...stringAvatar(user.fullname)}
        />
      )}
    </AvatarWrapper>
  );
};
