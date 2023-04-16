import React from "react";
import { useState } from "react";
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

import {
  getCurrentUserByToken,
  signIn,
} from "../../../../redux/user/asyncActions";
import { useAppDispatch } from "../../../../redux/store";
// types
import type { SignedFormProps } from "./types";
import type { LoginFormProps } from "../../../../types";

const loginFormSchema = yup
  .object({
    email: yup
      .string()
      .required("Введите E-Mail!")
      .email("E-Mail адрес указан некорректно."),
    password: yup
      .string()
      .required("Введите пароль!")
      .min(6, "Пароль должен содержать минимум 6 символов."),
  })
  .required();

function transition(props: any) {
  return <Slide {...props} direction="down" />;
}

export const SignedForm: React.FC<SignedFormProps> = ({ classes, onClose }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

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
    const { type } = await dispatch(signIn(data));
    if (type === "user/signIn/fulfilled") {
      setOpen(false);
      await dispatch(getCurrentUserByToken());
      onClose();
    }
    if (type === "user/signIn/rejected") {
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
                className={classes.classes.registerField}
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
                className={classes.classes.loginSideField}
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
          Не удалось войти в аккаунт. Неверный логин или пароль. Или аккаунт не
          был подтвержден.
        </Alert>
      </Snackbar>
    </form>
  );
};
