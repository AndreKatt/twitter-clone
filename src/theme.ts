import { red } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
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
    mode,
    ...(mode === "light"
      ? {
          neutral: {
            light: "#edf3f6",
            main: "#F5F8FA",
            dark: "rgb(207, 217, 222)",
          },
          background: {
            default: "#fff",
          },
          text: {
            primary: "#14171a",
          },
        }
      : {
          neutral: {
            light: "rgb(39, 51, 64);",
            main: "#15202B",
            dark: "rgb(66, 83, 100)",
          },
          background: {
            default: "#15202B",
            paper: "#15202B",
          },
          text: {
            primary: "#fff",
          },
        }),
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
  },
  shadows: ["none", "none"],
  components: {
    MuiPaper: {
      defaultProps: {
        outlined: {
          borderTop: 0,
          borderLeft: 0,
          borderRight: 0,
          borderRadius: 0,
        },
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
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
