import {
  GetDisplayDescription,
  GetLanguagesDescriptions,
  GetTitles,
} from "./types";

export const getTitles: GetTitles = (t) => ({
  home: {
    main: `${t("layouts.home.main")}`,
    sections: [
      {
        item: {
          title: `${t("layouts.home.sections.title1")}`,
          active: true,
        },
      },
      {
        item: {
          title: `${t("layouts.home.sections.title2")}`,
          active: false,
        },
      },
    ],
  },
  explore: {
    main: `${t("topics.label")}`,
  },
  notifications: {
    main: `${t("layouts.notifications.main")}`,
    sections: [
      {
        item: {
          title: `${t("layouts.notifications.sections.title1")}`,
          active: true,
        },
      },
      {
        item: {
          title: `${t("layouts.notifications.sections.title2")}`,
          active: false,
        },
      },
      {
        item: {
          title: `${t("layouts.notifications.sections.title3")}`,
          active: false,
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
  profile: {
    sections: [
      {
        item: {
          title: `${t("layouts.profile.sections.tweets")}`,
          active: true,
        },
      },
      {
        item: {
          title: `${t("layouts.profile.sections.replies")}`,
          active: false,
        },
      },
      {
        item: {
          title: `${t("layouts.profile.sections.highlights")}`,
          active: false,
        },
      },
      {
        item: {
          title: `${t("layouts.profile.sections.media")}`,
          active: false,
        },
      },
      {
        item: {
          title: `${t("layouts.profile.sections.likes")}`,
          active: false,
        },
      },
    ],
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
