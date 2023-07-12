import React from "react";
import IconButton from "@mui/material/IconButton";
// import { UploadedObject } from "../AddTweetForm/AddTweetForm";
// styles
import { DeleteIcon, ImageWrapper, ImagesContainer } from "./styles";
// types
import type { ImageListProps } from "./types";

export const ImagesList: React.FC<ImageListProps> = ({
  images,
  removeImage,
}) => {
  if (!images.length) {
    return null;
  }

  return (
    <ImagesContainer>
      {images.map((url) => (
        <ImageWrapper key={url} url={url}>
          {removeImage && (
            <IconButton onClick={(): void => removeImage(url)} color="primary">
              <DeleteIcon />
            </IconButton>
          )}
        </ImageWrapper>
      ))}
    </ImagesContainer>
  );
};
