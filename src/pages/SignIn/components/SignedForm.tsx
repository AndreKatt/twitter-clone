import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide/Slide";
import Button from "@material-ui/core/Button";
import Snackbar from "@mui/material/Snackbar";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import DialogActions from "@material-ui/core/DialogActions";

import { useStylesSignIn } from "../theme";
import { signIn } from "../../../redux/user/asyncActions";
import { useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import {
  selectUserError,
  selectUserToken,
} from "../../../redux/user/selectors";

interface SignedFormProps {
  classes: ReturnType<typeof useStylesSignIn>;
  onClose: () => void;
}

export interface LoginFormProps {
  email: string;
  password: string;
}

const loginFormSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

function transition(props: any) {
  return <Slide {...props} direction="down" />;
}

export const SignedForm: React.FC<SignedFormProps> = ({ classes, onClose }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const onError = useSelector(selectUserError);
  const signInToken = useSelector(selectUserToken);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormProps) => {
    await dispatch(signIn(data));
    if (!onError) {
      setOpen(false);
      if (signInToken)
        window.localStorage.setItem("token", signInToken.access_token);
      onClose();
    } else {
      setOpen(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl component="fieldset" fullWidth>
        <FormGroup aria-label="position" row>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
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
                helperText={errors.email?.message}
                error={!!errors.email}
                fullWidth
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                className={classes.loginSideField}
                autoFocus
                id="password"
                label="Пароль"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                type="password"
                helperText={errors.password?.message}
                error={!!errors.password}
                fullWidth
                {...field}
              />
            )}
          />
        </FormGroup>
      </FormControl>
      <DialogActions>
        <Button
          onClick={() => onSubmit}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Далее
        </Button>
      </DialogActions>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={8000}
        onClose={() => setOpen(false)}
        TransitionComponent={transition}
      >
        <Alert onClose={onClose} severity="error" sx={{ width: "100%" }}>
          Такого пользователя не существует! Неверный логин или пароль.
        </Alert>
      </Snackbar>
    </form>
  );
};
