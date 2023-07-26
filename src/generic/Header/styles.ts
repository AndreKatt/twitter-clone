import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";
import Paper, { PaperProps } from "@mui/material/Paper";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

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

export const SearchFieldContainer = styled(Paper)({
  padding: "0 20px",
});

export const HeaderButton = styled(IconButton)<IconButtonProps>({
  marginRight: 20,
});
