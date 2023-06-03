import { createTheme } from "@mui/material/styles";
import { theme } from "../../theme";

export const inputTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          backgroundColor: "#E6ECF0",
          padding: 0,
          paddingLeft: 15,

          "&:hover": {
            "& fieldset": {
              borderStyle: "solid",
              borderWidth: "1px !important",
              borderColor: theme.palette.primary.main,
            },
          },
          "& fieldset": {
            borderColor: "#E6ECF0",
          },
          "&.Mui-focused": {
            backgroundColor: "#fff",

            "& fieldset": {
              borderWidth: "1px !important",
              borderColor: theme.palette.primary.main,
            },
            "& svg path": {
              fill: theme.palette.primary.main,
            },
          },
        },
        input: {
          padding: "12px 14px 14px 5px",
        },
      },
    },
  },
});
