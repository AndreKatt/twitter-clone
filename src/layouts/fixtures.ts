import type {
  GetDisplayDescription,
  GetLanguagesDescriptions,
  GetSections,
  GetTitles,
} from "./types";

const getHomeSections: GetSections = (type, t) => {
  const sections = [
    {
      title: {
        text: `${t("layouts.home.sections.title1")}`,
        link: "/home",
        isActive: type === "home" ? true : false,
      },
    },
    {
      title: {
        text: `${t("layouts.home.sections.title2")}`,
        link: "subscriptions",
        isActive: type === "subscriptions" ? true : false,
      },
    },
  ];

  return sections;
};

const getFollowSections: GetSections = (type, t, email) => {
  const sections = [
    {
      title: {
        text: `${t("layouts.followers")}`,
        link: `/home/${email}/followers`,
        isActive: type === "followers" ? true : false,
      },
    },
    {
      title: {
        text: `${t("layouts.following")}`,
        link: `/home/${email}/following`,
        isActive: type === "following" ? true : false,
      },
    },
  ];

  return sections;
};

export const getTitles: GetTitles = (t, email) => ({
  home: {
    main: `${t("layouts.home.main")}`,
    sections: getHomeSections("home", t),
  },
  subscriptions: {
    main: `${t("layouts.home.main")}`,
    sections: getHomeSections("subscriptions", t),
  },
  explore: {
    main: `${t("topics.label")}`,
  },
  notifications: {
    main: `${t("layouts.notifications.main")}`,
    sections: [
      {
        title: {
          text: `${t("layouts.notifications.sections.title1")}`,
          isActive: true,
        },
      },
      {
        title: {
          text: `${t("layouts.notifications.sections.title2")}`,
          isActive: false,
        },
      },
      {
        title: {
          text: `${t("layouts.notifications.sections.title3")}`,
          isActive: false,
        },
      },
    ],
  },
  messages: {
    main: `${t("layouts.messages")}`,
  },
  bookmarks: {
    main: `${t("layouts.bookmarks")}`,
  },
  verified: {
    main: `${t("layouts.verified")}`,
  },
  followers: {
    sections: getFollowSections("followers", t, email),
  },
  following: {
    sections: getFollowSections("following", t, email),
  },
  settings: {
    main: `${t("layouts.settings")}`,
  },
  display: {
    main: `${t("layouts.displaySettings.main")}`,
  },
  languages: {
    main: `${t("layouts.languagesSettings.main")}`,
  },
  displayLaguage: {
    main: `${t("layouts.languagesSettings.displayLaguage")}`,
  },
  background: {
    main: `${t("layouts.displaySettings.background")}`,
  },
  fullTweet: {
    main: `${t("layouts.fullTweet")}`,
  },
});

export const getLanguagesDescriptions: GetLanguagesDescriptions = (t) => ({
  languages: `${t("layouts.languagesSettings.description1")}`,
  displayLaguage: `${t("layouts.languagesSettings.description2")}`,
});

export const getDisplayDescription: GetDisplayDescription = (t) =>
  `${t("layouts.displaySettings.description")}`;
