import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import PublicIcon from "@mui/icons-material/Public";

export const SettingsContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: 0,
  padding: "12px 16px",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: theme.palette.neutral.light,
  },
}));

export const InnerContainer = styled(Paper)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "inherit",
});

export const IconContainer = styled(Paper)({
  width: 48,
  display: "flex",
  justifyContent: "center",
  color: grey[500],
  marginRight: 16,
  backgroundColor: "inherit",
});

export const TextContainer = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "inherit",
});

export const Description = styled(Typography)({
  fontSize: 13,
  color: grey[500],
});

export const ArrowIcon = styled(ArrowForwardIosIcon)({
  fontSize: 17,
  color: grey[500],
});

export const BrushIcon = styled(BrushOutlinedIcon)({
  fontSize: 21,
  margin: "0 10px 0 12px",
});

export const EarthIcon = styled(PublicIcon)({
  fontSize: 21,
});
