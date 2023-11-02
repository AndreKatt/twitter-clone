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
        } else {
          if (user && file) {
            try {
              const url = await uploadFiles([file]);
              console.log(`/api/user/${type}/${user._id}`);
              await axios.patch(`/api/user/${type}/${user._id}`, {
                imageUrl: url[0],
              });
            } catch {
              alert("Не удалось загрузить файл! Попробуйте позже");
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
  }, [type, inputRef]);

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
