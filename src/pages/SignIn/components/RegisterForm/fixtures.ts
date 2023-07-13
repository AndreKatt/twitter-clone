import { TFunction } from "i18next";
import * as yup from "yup";

export const getLoginFormSchema = (t: TFunction<"translation", undefined>) =>
  yup
    .object({
      email: yup
        .string()
        .required(t("signIn.registerForm.validationInfo.emptyEmail"))
        .email(t("signIn.registerForm.validationInfo.wrongEmail")),
      username: yup
        .string()
        .required(t("signIn.registerForm.validationInfo.emptyUsernsme"))
        .min(2, t("signIn.registerForm.validationInfo.shortUsernsme")),
      fullname: yup
        .string()
        .required(t("signIn.registerForm.validationInfo.emptyFullname"))
        .min(2, t("signIn.registerForm.validationInfo.shortFullname")),
      password: yup
        .string()
        .required(t("signIn.registerForm.validationInfo.emptyPassword"))
        .min(6, t("signIn.registerForm.validationInfo.shortPassword")),
      password2: yup
        .string()
        .required(t("signIn.registerForm.validationInfo.emptyPassword2"))
        .oneOf(
          [yup.ref("password")],
          t("signIn.registerForm.validationInfo.wrongPassword2")
        ),
    })
    .required();
