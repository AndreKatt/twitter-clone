import React, { useEffect, useCallback } from "react";
// local libs
import { axios } from "../../core/axios";
import { uploadFiles } from "../../utils/uploadImages";
// types
import type { HiddenFileInputProps } from "./types";

export const HiddenFileInput: React.FC<HiddenFileInputProps> = ({
  type,
  inputRef,
  onChangeImages,
  user,
}) => {
  const handleChangeFileInput = useCallback(
    async (e: Event) => {
      if (e.target) {
        const target = e.target as HTMLInputElement;
        const file = target.files?.[0];

        if (file && onChangeImages) {
          if (type === "publication") {
            const fileObj = new Blob([file]);
            onChangeImages((prev) => [
              ...prev,
              { blobUrl: URL.createObjectURL(fileObj), file },
            ]);
          }

          if (type === "profile") {
            if (user) {
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
    <input
      ref={inputRef}
      type="file"
      accept="image/*,.png,.jpg,.gif,.web"
      id="upload-input"
      hidden
    />
  );
};
