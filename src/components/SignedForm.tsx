import React from "react";

import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import DialogActions from "@material-ui/core/DialogActions";
import { useStylesSignIn } from "../pages/SignIn";

interface SignedFormProps {
  classes: ReturnType<typeof useStylesSignIn>;
  onClose: () => void;
}
export const SignedForm: React.FC<SignedFormProps> = ({ classes, onClose }) => {
  return (
    <>
      <FormControl component="fieldset" fullWidth>
        <FormGroup aria-label="position" row>
          <TextField
            className={classes.registerField}
            autoFocus
            id="name"
            label="Имя"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            type="name"
            fullWidth
          />
          <TextField
            className={classes.registerField}
            autoFocus
            id="email"
            label="E-Mail"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            type="email"
            fullWidth
          />
          <TextField
            className={classes.registerField}
            autoFocus
            id="password"
            label="Пароль"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            type="password"
            fullWidth
          />
        </FormGroup>
      </FormControl>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary" fullWidth>
          Далее
        </Button>
      </DialogActions>
    </>
  );
};
