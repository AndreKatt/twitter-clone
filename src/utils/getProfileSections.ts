import { GetProfileSections } from "./types";

export const getProfileSections: GetProfileSections = (arr, email, type, t) => {
  return arr.map((label) => ({
    title: {
      text: `${t("layouts.profile.sections." + label)}`,
      link: `/home/${email}/${label}`,
      isActive: type === label ? true : false,
    },
  }));
};
