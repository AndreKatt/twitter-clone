import { styled } from "@mui/system";
import Button, { ButtonProps } from "@mui/material/Button";
import { StyledButtonProps } from "./types";

const StyledButton = styled(Button)({
  width: 181,
  height: 61,
  borderRadius: 4,
  border: "1px solid",
  margin: "7px 4px 0 15px",
  //   padding: "0 20px",
});

export const StyledButtonWithProps = styled(StyledButton)<
  ButtonProps & StyledButtonProps
>(({ themeColor, theme }) =>
  themeColor === "light"
    ? {
        color: "#15202B",
        backgroundColor: "#fff",
        borderColor: "#15202B",

        "&:hover": {
          backgroundColor: "#fff",
        },
      }
    : {
        color: "#fff",
        backgroundColor: "#15202B",
        borderColor: theme.palette.primary.main,

        "&:hover": {
          backgroundColor: "#15202B",
        },
      }
);
