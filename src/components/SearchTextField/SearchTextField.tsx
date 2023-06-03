import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider } from "@mui/material";
// styles
import { inputTheme } from "./styles";

export const SearchTextField: React.FC = () => {
  return (
    <ThemeProvider theme={inputTheme}>
      <TextField
        variant="outlined"
        placeholder="Поиск в Твиттере"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
      />
    </ThemeProvider>
  );
};
