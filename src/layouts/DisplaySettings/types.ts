import { TFunction } from "i18next";

type ButtonLabels = {
  light: string;
  dark: string;
};

export type GetButtonLabels = (
  t: TFunction<"translation", undefined>
) => ButtonLabels;
