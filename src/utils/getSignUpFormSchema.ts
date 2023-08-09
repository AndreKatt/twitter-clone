import * as yup from "yup";
// types
import type { TFunction } from "i18next";

const signUpValidation = "signIn.registerForm.validationInfo.";

export const getSignUpFormSchema = (t: TFunction<"translation", undefined>) =>
  yup
    .object({
      email: yup
        .string()
        .required(t(`${signUpValidation}emptyEmail`))
        .email(t(`${signUpValidation}wrongEmail`)),
      username: yup
        .string()
        .required(t(`${signUpValidation}emptyUsernsme`))
        .min(2, t(`${signUpValidation}shortUsernsme`)),
      fullname: yup
        .string()
        .required(t(`${signUpValidation}emptyFullname`))
        .min(2, t(`${signUpValidation}shortFullname`)),
      password: yup
        .string()
        .required(t(`${signUpValidation}emptyPassword`))
        .min(6, t(`${signUpValidation}shortPassword`)),
      password2: yup
        .string()
        .required(t(`${signUpValidation}emptyPassword2`))
        .oneOf([yup.ref("password")], t(`${signUpValidation}wrongPassword2`)),
    })
    .required();
