// @ts-nocheck
import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Ubuntu",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
  },

  palette: {
    primary: {
      main: "rgb(29, 155, 240)",
      dark: "rgb(26, 145, 218)",
      contrastText: "#fff",
    },
    secondary: {
      main: "rgb(26, 145, 218)",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#14171a",
    },
  },

  shadows: {
    1: "none",
    24: "none",
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: -32,
          paddingLeft: "0 !important",
        },
      },
    },

    MuiPaper: {
      defaultProps: {
        outlined: {
          borderTop: 0,
          borderLeft: 0,
          borderRight: 0,
          borderRadius: 0,
        },
      },
    },

    MuiGrid: {
      defaultProps: {
        item: {
          padding: "0px 12px 12px 0px !important",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: "none",
          fontSize: 16,
          height: 40,
          fontWeight: 700,
          minWidth: 51,
          boxShadow: "none",
        },
        textPrimary: {
          paddingLeft: 20,
          paddingRight: 20,
        },
        outlinedPrimary: {
          borderColor: "rgb(29, 155, 240)",
        },
      },
    },

    MuiFilledInput: {
      defaultProps: {
        underline: {
          "&:after": {
            borderBottomWidth: "2px",
          },
          "&:before": {
            borderColor: "#000",
            borderBottomWidth: "2px",
          },
        },
        input: {
          backgroundColor: "rgb(245, 248, 250)",
        },
      },
    },

    MuiDialog: {
      defaultProps: {
        paper: {
          borderRadius: 15,
        },
      },
    },

    MuiDialogActions: {
      defaultProps: {
        root: {
          marginBottom: 8,
        },
      },
    },

    MuiDialogTitle: {
      defaultProps: {
        root: {
          borderBottom: "1px solid rgba(204, 214, 221)",
          marginBottom: 10,
          padding: "10px 15px",
          "& h2": {
            display: "flex",
            alignItems: "center",
            fontWeight: 800,
          },
          "& button": {
            padding: 8,
            marginRight: 20,
          },
        },
      },
    },
  },
});
