// @ts-nocheck
import React, { createContext, useContext, useMemo, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
// styles
import { getDesignTokens } from "./theme";
// types
import type { ColorModeProviderProps, ToggleColorMode } from "./types";

const ColorModeContext: React.Context<{
  changeColorMode: ToggleColorMode;
}> = createContext({
  changeColorMode: (changeMode) => {},
});

export const useColorMode = () => {
  return useContext(ColorModeContext);
};

export const ColorModeProvider: React.FC<ColorModeProviderProps> = ({
  children,
}) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<string>(prefersDarkMode ? "dark" : "light");

  const colorMode = useMemo(
    () => ({
      changeColorMode: (changeMode: string) => {
        setMode(changeMode);
      },
    }),
    // eslint-disable-next-line
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
