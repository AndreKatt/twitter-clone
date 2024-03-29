import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
// types
import type { DialogProps } from "@mui/material/Dialog";

export const DialogWrapper = styled(Dialog)<DialogProps>({
  ".MuiPaper-root": {
    borderRadius: 16,
  },
});

export const CloseButton = styled(CloseIcon)({
  fontSize: 26,
});
