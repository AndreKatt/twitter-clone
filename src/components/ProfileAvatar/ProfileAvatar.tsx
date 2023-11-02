import React, { useRef } from "react";
import Tooltip from "@mui/material/Tooltip";
// local libs
import { HiddenFileInput } from "../../generic/HiddenFileInput/HiddenFileInput";
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
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickImage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <AvatarWrapper>
      {isCurrentUser ? (
        <>
          <HiddenFileInput type="profile" inputRef={inputRef} user={user} />

          <Tooltip
            arrow
            placement="right-end"
            title={t("layouts.profile.tooltip.avatar")}
          >
            <StyledProfileAvatar
              src={user.avatarUrl}
              {...stringAvatar(user.fullname)}
              onClick={handleClickImage}
            />
          </Tooltip>
        </>
      ) : (
        <StyledProfileAvatar
          src={user.avatarUrl}
          {...stringAvatar(user.fullname)}
        />
      )}
    </AvatarWrapper>
  );
};
