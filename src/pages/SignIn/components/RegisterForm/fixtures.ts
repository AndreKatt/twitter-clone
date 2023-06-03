import * as yup from "yup";

export const loginFormSchema = yup
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
