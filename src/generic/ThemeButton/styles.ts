import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
// types
import type { ButtonProps } from "@mui/material/Button";
import type { RadioProps } from "@mui/material/Radio";
import type { StyledButtonProps } from "./types";

const StyledButton = styled(Button)(({ theme }) => ({
  width: 190,
  height: 61,
  display: "flex",
  justifyContent: "start",
  whiteSpace: "nowrap",
  borderRadius: 4,
  border: "1px solid",
  borderColor: theme.palette.primary.main,
  margin: "7px 4px 0 15px",
  padding: "0 7px",
}));

export const StyledButtonWithProps = styled(StyledButton)<
  ButtonProps & StyledButtonProps
>(({ themecolor }) =>
  themecolor === "light"
    ? {
        color: "#15202B",
        backgroundColor: "#fff",

        "&:hover": {
          backgroundColor: "#fff",
        },
      }
    : {
        color: "#fff",
        backgroundColor: "#15202B",

        "&:hover": {
          backgroundColor: "#15202B",
        },
      }
);

export const CheckRadio = styled(Radio)<RadioProps>({
  color: grey[500],
});

export const Label = styled(Typography)({
  width: 110,
  fontWeight: "bold",
});
