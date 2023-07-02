import React from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide/Slide";
import Snackbar from "@mui/material/Snackbar";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import DialogActions from "@mui/material/DialogActions";
// local libs
import { signUp } from "../../../../redux/currentUser/asyncActions";
import { useAppDispatch } from "../../../../redux/store";
import { loginFormSchema } from "./fixtures";
// styles
import { InputField } from "../../styles";
import { SignAlert } from "./styles";
// types
import type { RegisterFormProps, SignUpFormProps } from "./types";

function transition(props: any) {
  return <Slide {...props} direction="down" />;
}

export const RegisterForm: React.FC<SignUpFormProps> = ({ onClose }) => {
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
              <InputField
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
              <InputField
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
              <InputField
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
              <InputField
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
              <InputField
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
        <SignAlert onClose={onClose} severity="success">
          Вы успешно зарегистрированы. На вашу почту направлено письмо для
          подтверждения аккаунта. После подтверждения аккаунта войдите в
          профиль.
        </SignAlert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openError}
        autoHideDuration={8000}
        onClose={() => setOpenError(false)}
        TransitionComponent={transition}
      >
        <SignAlert onClose={onClose} severity="error">
          Ошибка при создании аккаунта. Попробуйте позже.
        </SignAlert>
      </Snackbar>
    </form>
  );
};
