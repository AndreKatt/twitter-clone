import {
  GetDisplayDescription,
  GetLanguagesDescriptions,
  GetTitles,
} from "./types";

export const getTitles: GetTitles = (t, email) => ({
  home: {
    main: `${t("layouts.home.main")}`,
    sections: [
      {
        title: {
          text: `${t("layouts.home.sections.title1")}`,
          isActive: true,
        },
      },
      {
        title: {
          text: `${t("layouts.home.sections.title2")}`,
          isActive: false,
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
  profile: {
    sections: [
      {
        title: {
          text: `${t("layouts.profile.sections.tweets")}`,
          isActive: true,
        },
      },
      {
        title: {
          text: `${t("layouts.profile.sections.replies")}`,
          isActive: false,
        },
      },
      {
        title: {
          text: `${t("layouts.profile.sections.highlights")}`,
          isActive: false,
        },
      },
      {
        title: {
          text: `${t("layouts.profile.sections.media")}`,
          isActive: false,
        },
      },
      {
        title: {
          text: `${t("layouts.profile.sections.likes")}`,
          isActive: false,
        },
      },
    ],
  },
  followers: {
    sections: [
      {
        title: {
          text: `${t("layouts.followers")}`,
          link: `/home/${email}/followers`,
          isActive: true,
        },
      },
      {
        title: {
          text: `${t("layouts.following")}`,
          link: `/home/${email}/following`,
          isActive: false,
        },
      },
    ],
  },
  following: {
    sections: [
      {
        title: {
          text: `${t("layouts.followers")}`,
          link: `/home/${email}/followers`,
          isActive: false,
        },
      },
      {
        title: {
          text: `${t("layouts.following")}`,
          link: `/home/${email}/following`,
          isActive: true,
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
