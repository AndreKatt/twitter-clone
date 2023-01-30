import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import DialogActions from "@material-ui/core/DialogActions";

import { useStylesSignIn } from "../theme";

interface RegisterFormProps {
  classes: ReturnType<typeof useStylesSignIn>;
  onClose: () => void;
}

interface LoginFormProps {
  email: string;
  password: string;
}

const loginFormSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

export const RegisterForm: React.FC<RegisterFormProps> = ({
  classes,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: yupResolver(loginFormSchema),
  });
  const onSubmit = (data: LoginFormProps) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("email")}
          />
          {/* <p>{errors.email?.message}</p> */}
          <TextField
            name="password"
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
            inputRef={register}
          />
          <p>{errors.password?.message}</p>
        </FormGroup>
      </FormControl>
      <DialogActions>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Далее
        </Button>
      </DialogActions>
    </form>
  );
};
