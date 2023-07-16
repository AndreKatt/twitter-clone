import { styled } from "@mui/system";
import { colors } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { TitleProps } from "./types";

export const TitleContainer = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: 0,
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: theme.palette.neutral.light,
  },
}));

export const Title = styled(Typography)<TitleProps>(({ isActive, theme }) => ({
  height: "100%",
  color: isActive ? theme.palette.text.primary : colors.grey[500],
  fontWeight: "bold",
  fontSize: 15,
  textAlign: "center",
  paddingTop: 10,
}));

export const BottomLine = styled(Container)(({ theme }) => ({
  width: "30%",
  height: 5,
  backgroundColor: theme.palette.primary.main,
  borderRadius: "10px",
  marginTop: 0,
}));
