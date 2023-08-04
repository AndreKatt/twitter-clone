import type { GetSections } from "../types";

export const getProfileSections: GetSections = (type, t, email) => {
  const sections = [
    {
      title: {
        text: `${t("layouts.profile.sections.tweets")}`,
        link: `/home/${email}`,
        isActive: type === "tweets" ? true : false,
      },
    },
    {
      title: {
        text: `${t("layouts.profile.sections.replies")}`,
        link: "#",
        isActive: type === "replies" ? true : false,
      },
    },
    {
      title: {
        text: `${t("layouts.profile.sections.media")}`,
        link: "#",
        isActive: type === "media" ? true : false,
      },
    },
    {
      title: {
        text: `${t("layouts.profile.sections.likes")}`,
        link: "likes",
        isActive: type === "likes" ? true : false,
      },
    },
  ];

  return sections;
};
