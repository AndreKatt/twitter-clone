import React from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import DialogActions from "@mui/material/DialogActions";
// local libs
import { signUp } from "../../../../redux/currentUser/asyncActions";
import { useAppDispatch } from "../../../../redux/store";
import { getSignUpFormSchema } from "../../../../utils/getSignUpFormSchema";
import { transition } from "../../fixtures";
// styles
import { InputField } from "../../styles";
import { SignAlert } from "./styles";
// types
import type { SignUpFormProps } from "./types";
import type { RegisterFormProps, i18nProps } from "../../../../types";

export const RegisterForm: React.FC<SignUpFormProps & i18nProps> = ({
  onClose,
  t,
}) => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormProps>({
    resolver: yupResolver(getSignUpFormSchema(t)),
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
    if (type === "currentUser/signUp/fulfilled") {
      setOpenSuccess(true);
    }
    if (type === "currentUser/signUp/rejected") {
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
                label={t("signIn.registerForm.fieldLabels.login")}
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
                label={t("signIn.registerForm.fieldLabels.email")}
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
                label={t("signIn.registerForm.fieldLabels.fullname")}
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
                label={t("signIn.registerForm.fieldLabels.password")}
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
                label={t("signIn.registerForm.fieldLabels.password2")}
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
          {t("signIn.registerForm.buttonLabel")}
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
          {t("signIn.registerForm.successAlert")}
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
          {t("signIn.registerForm.Alert")}
        </SignAlert>
      </Snackbar>
    </form>
  );
};
