import React, { useEffect, useRef, useCallback } from "react";
import IconButton from "@mui/material/IconButton";
// local libs
import { ImagesList } from "../../generic/ImagesList/ImagesList";
// styles
import { ImageIcon } from "./styles";
// types
import type { UploadImagesProps } from "./types";

export const UploadImages: React.FC<UploadImagesProps> = ({
  images,
  onChangeImages,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickImage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const removeImage = (url: string) => {
    onChangeImages((prev) => prev.filter((item) => item.blobUrl !== url));
  };

  const handleChangeFileInput = useCallback((e: Event) => {
    if (e.target) {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];

      if (file) {
        const fileObj = new Blob([file]);
        onChangeImages((prev) => [
          ...prev,
          { blobUrl: URL.createObjectURL(fileObj), file },
        ]);
      }
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("change", handleChangeFileInput);
    }
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("change", handleChangeFileInput);
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*,.png,.jpg,.gif,.web"
        id="upload-input"
        hidden
      />
      <ImagesList
        type="tweetForm"
        images={images.map((img) => img.blobUrl)}
        removeImage={removeImage}
      />
      <IconButton onClick={handleClickImage} color="primary">
        <ImageIcon />
      </IconButton>
    </div>
  );
};
