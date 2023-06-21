import { styled } from "@mui/system";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";

export const InputField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  backgroundColor: theme.palette.neutral.light,
  borderRadius: 30,

  "& input": {
    padding: "12px 14px 14px 5px",
  },
  "& div": {
    borderRadius: 30,
    padding: 0,
    paddingLeft: 15,

    "& fieldset": {
      borderColor: theme.palette.neutral.light,

      "&:hover": {
        borderStyle: "solid",
        borderWidth: "1px !important",
      },
    },

    "&.Mui-focused": {
      backgroundColor: theme.palette.background.default,

      "& fieldset": {
        borderWidth: "1px !important",
        borderColor: theme.palette.primary.main,
      },
    },
  },
}));

export const Icon = styled(SearchIcon)({
  color: grey[500],
});
