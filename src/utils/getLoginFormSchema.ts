import * as yup from "yup";
// types
import type { TFunction } from "i18next";

const signInValidation = "signIn.signedForm.validationInfo.";

export const getLoginFormSchema = (t: TFunction<"translation", undefined>) =>
  yup
    .object({
      email: yup
        .string()
        .required(t(`${signInValidation}emptyEmail`))
        .email(t(`${signInValidation}wrongEmail`)),
      password: yup
        .string()
        .required(t(`${signInValidation}emptyPassword`))
        .min(6, t(`${signInValidation}shortPassword`)),
    })
    .required();
