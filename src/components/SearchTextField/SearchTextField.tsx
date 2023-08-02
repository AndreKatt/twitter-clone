import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
// styles
import { InputField, Icon } from "./styles";
// types
import type { i18nProps } from "../../types";

export const SearchTextField: React.FC<i18nProps> = ({ t }) => {
  return (
    <InputField
      variant="outlined"
      placeholder={`${t("searchTextField")}`}
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
