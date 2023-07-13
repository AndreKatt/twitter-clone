import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import DialogActions from "@mui/material/DialogActions";
// local libs
import {
  getCurrentUserByToken,
  signIn,
} from "../../../../redux/currentUser/asyncActions";
import { useAppDispatch } from "../../../../redux/store";
import { getLoginFormSchema } from "./fixtures";
import { transition } from "../../fixtures";
// styles
import { InputField } from "../../styles";
import { SignInInputField } from "./styles";
// types
import type { SignedFormProps } from "./types";
import type { LoginFormProps, i18nProps } from "../../../../types";

export const SignedForm: React.FC<SignedFormProps & i18nProps> = ({
  onClose,
  t,
}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: yupResolver(getLoginFormSchema(t)),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormProps) => {
    const { type } = await dispatch(signIn(data));
    if (type === "currentUser/signIn/fulfilled") {
      setOpen(false);
      await dispatch(getCurrentUserByToken());
      onClose();
    }
    if (type === "currentUser/signIn/rejected") {
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
              <InputField
                autoFocus
                id="email"
                label={t("signIn.signedForm.fieldLabels.email")}
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
              <SignInInputField
                autoFocus
                id="password"
                label={t("signIn.signedForm.fieldLabels.password")}
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
          {t("signIn.signedForm.buttonLabel")}
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
          {t("signIn.signedForm.errorAlert")}
        </Alert>
      </Snackbar>
    </form>
  );
};
