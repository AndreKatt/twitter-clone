import React, { useCallback, useEffect, useRef } from "react";
import Tooltip from "@mui/material/Tooltip";
// local libs
import { stringAvatar } from "../../utils/stringAvatar";
// styles
import { AvatarWrapper, StyledProfileAvatar } from "./style";
// types
import type { ProfileAvatarProps } from "./types";
import type { i18nProps } from "../../types";
import { axios } from "../../core/axios";
import { uploadFiles } from "../../utils/uploadImages";

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

  const handleChangeFileInput = useCallback(
    async (e: Event) => {
      if (e.target && inputRef.current) {
        const target = e.target as HTMLInputElement;
        const file = target.files?.[0];

        if (file) {
          try {
            const url = await uploadFiles([file]);
            await axios.patch(`/api/user/setAvatar/${user._id}`, {
              avatarUrl: url[0],
            });
          } catch {
            alert("Не удалось загрузить файл! Попробуйте позже");
          }
        }
      }
    },
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("change", handleChangeFileInput);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <AvatarWrapper>
      {isCurrentUser ? (
        <>
          <input
            ref={inputRef}
            type="file"
            accept="image/*,.png,.jpg,.gif,.web"
            id="upload-input"
            hidden
          />

          <Tooltip
            arrow
            placement="right-end"
            title={t("layouts.profile.tooltip")}
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
