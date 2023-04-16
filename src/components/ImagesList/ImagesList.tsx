import React from "react";
import { IconButton } from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
// import { UploadedObject } from "../AddTweetForm/AddTweetForm";
// types
import type { ImageListProps } from "./types";

export const ImagesList: React.FC<ImageListProps> = ({
  images,
  classes,
  removeImage,
}) => {
  if (!images.length) {
    return null;
  }
  return (
    <div className={classes.classes.imagesList}>
      {images.map((url) => (
        <div
          key={url}
          className={classes.classes.imagesListItem}
          style={{ backgroundImage: `url(${url})` }}
        >
          {removeImage && (
            <IconButton onClick={(): void => removeImage(url)} color="primary">
              <DeleteForever style={{ fontSize: 20 }} />
            </IconButton>
          )}
        </div>
      ))}
    </div>
  );
};
