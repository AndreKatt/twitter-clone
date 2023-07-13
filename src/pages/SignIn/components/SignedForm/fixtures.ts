import { TFunction } from "i18next";
import * as yup from "yup";

export const getLoginFormSchema = (t: TFunction<"translation", undefined>) =>
  yup
    .object({
      email: yup
        .string()
        .required(t("signIn.signedForm.validationInfo.emptyEmail"))
        .email(t("signIn.signedForm.validationInfo.wrongEmail")),
      password: yup
        .string()
        .required(t("signIn.signedForm.validationInfo.emptyPassword"))
        .min(6, t("signIn.signedForm.validationInfo.shortPassword")),
    })
    .required();
