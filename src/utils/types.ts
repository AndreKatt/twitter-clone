import type { TFunction } from "i18next";
import type { HeaderSectionTitleType } from "../types";

export type GetSections = (
  arr: string[],
  type: string,
  t: TFunction,
  email?: string
) => HeaderSectionTitleType[];
