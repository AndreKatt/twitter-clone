import type { TFunction } from "i18next";

type BlueSideListItem = {
  id: string;
  icon: JSX.Element;
  label: string;
};

export type GetBlueSideList = (
  t: TFunction<"translation", undefined>
) => BlueSideListItem[];
