import React, { useRef } from "react";
import IconButton from "@mui/material/IconButton";
// local libs
import { ImagesList } from "../../generic/ImagesList/ImagesList";
import { HiddenFileInput } from "../../generic/HiddenFileInput/HiddenFileInput";
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

  return (
    <div>
      <HiddenFileInput
        type="publication"
        onChangeImages={onChangeImages}
        inputRef={inputRef}
      />

      <ImagesList
        type="publicationForm"
        images={images.map((img) => img.blobUrl)}
        removeImage={removeImage}
      />
      <IconButton onClick={handleClickImage} color="primary">
        <ImageIcon />
      </IconButton>
    </div>
  );
};
