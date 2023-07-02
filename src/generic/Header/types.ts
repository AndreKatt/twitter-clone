import { HeaderSectionTitleType } from "../../types";

export type HeaderProps = {
  variant: "outlined" | "elevation";
  searchField?: boolean;
  icon?: boolean;
  title: string;
  titles?: Array<HeaderSectionTitleType>;
};
