import { styled } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Divider from "@mui/material/Divider";
// types
import type { CircularProgressProps } from "@mui/material/CircularProgress";
import type { TextareaAutosizeProps } from "@mui/material/TextareaAutosize";
import type { BodyContainerProps, StyledCircularProgressProps } from "./types";

export const BodyContainer = styled("div")<BodyContainerProps>(
  ({ minHeight }) => ({
    minHeight: minHeight,
    display: "flex",
    width: "100%",
  })
);

export const StyledDivider = styled(Divider)({
  marginTop: 15,
  marginBottom: 7,
});

export const BottomContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const ImagesWrapper = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  marginTop: 10,
  paddingLeft: 70,
});

export const ButtomRightContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const CircularProgressWrapper = styled("div")({
  position: "relative",
  width: 20,
  height: 20,
  margin: "0 10px",

  "& .MuiCircularProgress-root": {
    position: "absolute",
  },
});

export const Textarea = styled(TextareaAutosize)<TextareaAutosizeProps>(
  ({ theme }) => ({
    width: "100%",
    color: theme.palette.text.primary,
    backgroundColor: "inherit",
    border: 0,
    fontSize: 20,
    outline: "none",
    fontFamily: "inherit",
    resize: "none",
    paddingLeft: 20,
  })
);

export const StyledCircularProgress = styled(CircularProgress)<
  CircularProgressProps & StyledCircularProgressProps
>(({ textLength }) => ({
  color: textLength ? "red" : "rgba(0, 0, 0, 0.1)",
}));
