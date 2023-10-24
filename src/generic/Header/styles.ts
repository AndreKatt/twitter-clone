import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// types
import type { PaperProps } from "@mui/material/Paper";
import type { IconButtonProps } from "@mui/material/IconButton";

export const HeaderTitleContainer = styled(Paper)({
  height: 53,
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  paddingLeft: 15,
});

export const SecondTitle = styled(Typography)({
  fontSize: 13,
  color: grey[500],
  marginBottom: 5,
});

export const TweetsHeader = styled(Paper)<PaperProps>({
  position: "sticky",
  top: 0,
  zIndex: 2,
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "column",
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  borderRadius: 0,
  backdropFilter: "blur(15px)",
  cursor: "pointer",

  "& h6": {
    fontWeight: 800,
  },
});

export const HeaderButton = styled(IconButton)<IconButtonProps>({
  marginRight: 20,
});
