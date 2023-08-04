import { GetSections } from "./types";

export const getSections: GetSections = (arr, type, t, email) => {
  return arr.map((label) => ({
    title: {
      text: `${t("layouts.sections." + label)}`,
      link: email ? `/${email}/${label}` : `/${label}`,
      isActive: type === label ? true : false,
    },
  }));
};
