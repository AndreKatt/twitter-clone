import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteForever from "@mui/icons-material/DeleteForever";
// import { UploadedObject } from "../AddTweetForm/AddTweetForm";
// styles
import { ImageWrapper, ImagesContainer } from "./styles";
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
        <ImageWrapper key={url} style={{ backgroundImage: `url(${url})` }}>
          {removeImage && (
            <IconButton onClick={(): void => removeImage(url)} color="primary">
              <DeleteForever style={{ fontSize: 20 }} />
            </IconButton>
          )}
        </ImageWrapper>
      ))}
    </ImagesContainer>
  );
};
