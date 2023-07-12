import React from "react";
import IconButton from "@mui/material/IconButton";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
// styles
import { CloseButton, DialogWrapper } from "./styles";
// types
import type { ModalBlockProps } from "./types";

export const ModalBlock: React.FC<ModalBlockProps> = ({
  title,
  children,
  visible,
  onClose,
}): React.ReactElement | null => {
  if (!visible) {
    return null;
  }

  return (
    <DialogWrapper
      open={visible}
      onClose={onClose}
      aria-labelledby="form-dialog"
    >
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={onClose} color="secondary" aria-label="close">
          <CloseButton color="secondary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </DialogWrapper>
  );
};
