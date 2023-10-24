import { styled } from "@mui/system";
import DeleteForever from "@mui/icons-material/DeleteForever";
// types
import type { ImageWrapperProps, ImagesContainerProps } from "./types";

export const ImagesContainer = styled("div")<ImagesContainerProps>(
  ({ type }) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    ...(type === "tweetForm"
      ? { height: "auto", flexWrap: "wrap" }
      : { justifyContent: "center", height: 400, flexWrap: "nowrap" }),
    marginTop: 20,
  })
);

export const ImageWrapper = styled("div")<ImageWrapperProps>(
  ({ type, url }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    ...(type === "tweetForm"
      ? {
          width: 50,
          height: 50,
          backgroundSize: "cover",
        }
      : {
          width: "100%",
          height: "inherit",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }),
    backgroundPosition: "center",
    backgroundImage: `url(${url})`,
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
  })
);

export const DeleteIcon = styled(DeleteForever)({
  fontSize: 20,
});
