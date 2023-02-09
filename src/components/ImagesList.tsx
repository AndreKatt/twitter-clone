import React from "react";
import { IconButton } from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import { UploadedObject } from "./AddTweetForm";
import { useHomeStyles } from "../pages/Home/theme";

interface ImageListProps {
  images: string[];
  classes: ReturnType<typeof useHomeStyles>;
  removeImage?: (url: string) => void;
}

export const ImagesList: React.FC<ImageListProps> = ({
  images,
  classes,
  removeImage,
}) => {
  if (!images.length) {
    return null;
  }
  return (
    <div className={classes.imagesList}>
      {images.map((url) => (
        <div
          key={url}
          className={classes.imagesListItem}
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
