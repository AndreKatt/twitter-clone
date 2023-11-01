import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
// types
import type { IconButtonProps } from "@mui/material/IconButton";
import type { PublicationFooterProps } from "./types";

export const FooterWrapper = styled("div")<Partial<PublicationFooterProps>>(
  ({ type }) => ({
    position: "relative",
    display: "grid",
    justifyContent: "space-between",
    gridTemplateColumns: "65px 65px 65px 65px",

    ...(type === "publication"
      ? {
          left: -13,
        }
      : {
          left: 13,
          paddingRight: 30,
        }),
  })
);

export const FooterContainer = styled("div")<Partial<PublicationFooterProps>>(
  ({ type }) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: "inherit",

    ...(type === "fullPublication" && {
      flexDirection: "row",
      justifyContent: "space-around",
      paddingTop: "5px 0 0 20px",
      margin: "5px 0",
    }),
  })
);

export const FooterIcon = styled(IconButton)<
  IconButtonProps & Partial<PublicationFooterProps>
>(({ type, theme }) => ({
  fontSize: type === "publication" ? "20px !important" : "25px !important",

  "&:hover": {
    "& svg path": {
      fill: theme.palette.primary.main,
    },
  },
}));
