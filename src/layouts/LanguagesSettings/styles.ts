import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";

export const LanguagesContainer = styled(Paper)({
  padding: "20px 15px",
});

export const LanguageControlLabel = styled(
  FormControlLabel
)<FormControlLabelProps>({
  paddingRight: 20,
});
