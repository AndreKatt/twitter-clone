import type { TFunction } from "i18next";

type MenuItem = {
  link: string;
  icon: JSX.Element;
  label: string;
};

export type GetMenu = (
  user: string | undefined,
  t: TFunction<"translation", undefined>
) => Array<MenuItem>;
