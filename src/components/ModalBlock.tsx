import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

// import { useStylesSignIn } from "../../pages/SignIn";

interface ModalBlockProps {
  children: React.ReactNode;
  // classes: ReturnType<typeof useStylesSignIn>;
  visible: boolean;
  signed: boolean;
  onClose: () => void;
}

export const ModalBlock: React.FC<ModalBlockProps> = ({
  children,
  visible,
  signed,
  onClose,
}): React.ReactElement | null => {
  if (!visible) {
    return null;
  }

  return (
    <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog">
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={onClose} color="secondary" aria-label="close">
          <CloseIcon style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        {signed ? "Войти в аккаунт" : "Создайте учетную запись"}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary" fullWidth>
          {signed ? "Войти" : "Далее"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
