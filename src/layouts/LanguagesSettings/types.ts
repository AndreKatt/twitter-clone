import { TFunction } from "i18next";

type ButtonLabels = {
  russian: string;
  english: string;
};

export type GetButtonLabels = (
  t: TFunction<"translation", undefined>
) => ButtonLabels;
