import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { ImageOutlined } from "@material-ui/icons";
import { UploadedObject } from "./AddTweetForm";
import { useEffect, useRef } from "react";
import { useCallback } from "react";

import { useHomeStyles } from "../pages/Home/theme";
import { ImagesList } from "./ImagesList";

interface UploadImagesProps {
  images: UploadedObject[];
  onChangeImages: (
    callback: (prev: UploadedObject[]) => UploadedObject[]
  ) => void;
}
export const UploadImages: React.FC<UploadImagesProps> = ({
  images,
  onChangeImages,
}) => {
  const classes = useHomeStyles();
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
        images={images.map((img) => img.blobUrl)}
        classes={classes}
        removeImage={removeImage}
      />
      <IconButton onClick={handleClickImage} color="primary">
        <ImageOutlined style={{ fontSize: 26 }} />
      </IconButton>
    </div>
  );
};
