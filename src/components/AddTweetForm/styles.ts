import { styled } from "@mui/system";
import Avatar, { AvatarProps } from "@mui/material/Avatar";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "@mui/material/TextareaAutosize";

export const BodyContainer = styled("div")({
  display: "flex",
  width: "100%",
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

export const AddTweetAvatar = styled(Avatar)<AvatarProps>(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  cursor: "pointer",
  transition: "filter 0.2s ",

  "&:hover": {
    filter: "brightness(0.8)",
  },
}));

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
