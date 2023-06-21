import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
// styles
import { InputField, Icon } from "./styles";

export const SearchTextField: React.FC = () => {
  return (
    <InputField
      variant="outlined"
      placeholder="Поиск в Твиттере"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon />
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};
