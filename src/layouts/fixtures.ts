import {
  GetDisplayDescription,
  GetLanguagesDescriptions,
  GetTitles,
} from "./types";

export const getTitles: GetTitles = (t) => ({
  home: {
    main: `${t("layoutTitles.home.main")}`,
    sections: [
      {
        item: {
          title: `${t("layoutTitles.home.sections.title1")}`,
          active: true,
        },
      },
      {
        item: {
          title: `${t("layoutTitles.home.sections.title2")}`,
          active: false,
        },
      },
    ],
  },
  explore: {
    main: `${t("topics.label")}`,
  },
  notifications: {
    main: `${t("layoutTitles.notifications.main")}`,
    sections: [
      {
        item: {
          title: `${t("layoutTitles.notifications.sections.title1")}`,
          active: true,
        },
      },
      {
        item: {
          title: `${t("layoutTitles.notifications.sections.title2")}`,
          active: false,
        },
      },
      {
        item: {
          title: `${t("layoutTitles.notifications.sections.title3")}`,
          active: false,
        },
      },
    ],
  },
  messages: {
    main: `${t("layoutTitles.messages")}`,
  },
  bookmarks: {
    main: `${t("layoutTitles.bookmarks")}`,
  },
  verified: {
    main: `${t("layoutTitles.verified")}`,
  },
  settings: {
    main: `${t("layoutTitles.settings")}`,
  },
  display: {
    main: `${t("layoutTitles.displaySettings.main")}`,
  },
  languages: {
    main: `${t("layoutTitles.languagesSettings.main")}`,
  },
  displayLaguage: {
    main: `${t("layoutTitles.languagesSettings.displayLaguage")}`,
  },
  background: {
    main: `${t("layoutTitles.displaySettings.background")}`,
  },
  fullTweet: {
    main: `${t("layoutTitles.fullTweet")}`,
  },
});

export const getLanguagesDescriptions: GetLanguagesDescriptions = (t) => ({
  languages: `${t("layoutTitles.languagesSettings.description1")}`,
  displayLaguage: `${t("layoutTitles.languagesSettings.description2")}`,
});

export const getDisplayDescription: GetDisplayDescription = (t) =>
  `${t("layoutTitles.displaySettings.description")}`;
