import { styled } from "@mui/system";

export const ImagesContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginTop: 20,
  flexWrap: "wrap",
});

export const ImageWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 50,
  height: 50,
  overflow: "hidden",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: 6,
  marginRight: 10,
  marginBottom: 10,

  "& button": {
    opacity: 0.6,
    "&:hover": {
      opacity: 1,
    },
  },
  "& svg path": {
    fill: "white",
  },
});
