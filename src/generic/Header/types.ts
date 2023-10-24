import type { HeaderSectionTitleType } from "../../types";

export type HeaderProps = {
  variant: "outlined" | "elevation";
  icon?: boolean;
  title?: string;
  secondText?: string;
  titles?: Array<HeaderSectionTitleType>;
};
