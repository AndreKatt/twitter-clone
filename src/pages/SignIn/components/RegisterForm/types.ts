import type { SignComponentStyleProps } from "../../types";

export type SignUpFormProps = {
  classes: SignComponentStyleProps;
  onClose: () => void;
};

export type RegisterFormProps = {
  email: string;
  username: string;
  fullname: string;
  password: string;
  password2: string;
};
