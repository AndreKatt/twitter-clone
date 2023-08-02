import type { TFunction } from "i18next";

type SettingsData = {
  link: string;
  icon: JSX.Element;
  title: string;
  description: string;
};

export type GetSettingsData = (
  t: TFunction<"translation", undefined>
) => SettingsData[];
