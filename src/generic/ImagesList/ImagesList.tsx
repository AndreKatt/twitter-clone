import React from "react";
import IconButton from "@mui/material/IconButton";
// styles
import { DeleteIcon, ImageWrapper, ImagesContainer } from "./styles";
// types
import type { ImageListProps } from "./types";

export const ImagesList: React.FC<ImageListProps> = ({
  type,
  images,
  removeImage,
}) => {
  if (!images.length) {
    return null;
  }

  return (
    <ImagesContainer type={type}>
      {images.map((url) => (
        <ImageWrapper type={type} key={url} url={url}>
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
