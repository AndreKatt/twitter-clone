import type { TFunction } from "i18next";
import type { HeaderSectionTitleType } from "../types";

export type GetProfileSections = (
  arr: string[],
  email: string,
  type: string,
  t: TFunction
) => HeaderSectionTitleType[];
