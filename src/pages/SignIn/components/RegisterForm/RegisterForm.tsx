import React from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Alert from "@mui/material/Alert";
import Button from "@material-ui/core/Button";
import Slide from "@mui/material/Slide/Slide";
import Snackbar from "@mui/material/Snackbar";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import DialogActions from "@material-ui/core/DialogActions";

import { signUp } from "../../../../redux/user/asyncActions";
import { useAppDispatch } from "../../../../redux/store";
// types
import type { RegisterFormProps, SignUpFormProps } from "./types";

const loginFormSchema = yup
  .object({
    email: yup
      .string()
      .required("Введите E-Mail!")
      .email("E-Mail адрес указан некорректно."),
    username: yup
      .string()
      .required("Введите логин!")
      .min(2, "Логин должен содержать минимум 2 символа"),
    fullname: yup
      .string()
      .required("Введите имя!")
      .min(2, "Имя должено содержать минимум 2 символа"),
    password: yup
      .string()
      .required("Введите пароль")
      .min(6, "Пароль должен содержать минимум 6 символов."),
    password2: yup
      .string()
      .required("Подтвердите пароль!")
      .oneOf([yup.ref("password")], "Пароли не совпадают"),
  })
  .required();

function transition(props: any) {
  return <Slide {...props} direction="down" />;
}

export const RegisterForm: React.FC<SignUpFormProps> = ({
  classes,
  onClose,
}) => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormProps>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: "",
      username: "",
      fullname: "",
      password: "",
      password2: "",
    },
  });

  const onSubmit = async (data: RegisterFormProps) => {
    const { type } = await dispatch(signUp(data));
    if (type === "user/signUp/fulfilled") {
      setOpenSuccess(true);
    }
    if (type === "user/signUp/rejected") {
      setOpenError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl component="fieldset" fullWidth>
        <FormGroup aria-label="position" row>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                className={classes.classes.registerField}
                autoFocus
                id="name"
                label="Логин"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                type="text"
                helperText={errors.username?.message}
                error={!!errors.username}
                fullWidth
                {...field}
              />
            )}
          />
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
            name="fullname"
            control={control}
            render={({ field }) => (
              <TextField
                className={classes.classes.registerField}
                autoFocus
                id="fullname"
                label="Имя"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                type="text"
                helperText={errors.fullname?.message}
                error={!!errors.fullname}
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
                className={classes.classes.registerField}
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
          <Controller
            name="password2"
            control={control}
            render={({ field }) => (
              <TextField
                className={classes.classes.registerField}
                autoFocus
                id="password2"
                label="Повторите пароль"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                type="password"
                helperText={errors.password2?.message}
                error={!!errors.password2}
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
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSuccess}
        autoHideDuration={8000}
        onClose={() => setOpenSuccess(false)}
        TransitionComponent={transition}
      >
        <Alert onClose={onClose} severity="success" sx={{ width: "100%" }}>
          Вы успешно зарегистрированы. На вашу почту направлено письмо для
          подтверждения аккаунта. После подтверждения аккаунта войдите в
          профиль.
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openError}
        autoHideDuration={8000}
        onClose={() => setOpenError(false)}
        TransitionComponent={transition}
      >
        <Alert onClose={onClose} severity="error" sx={{ width: "100%" }}>
          Ошибка при создании аккаунта. Попробуйте позже.
        </Alert>
      </Snackbar>
    </form>
  );
};
