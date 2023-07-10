import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: ["en", "ru"],
    resources: {
      en: {
        translation: {
          sideMenu: {
            home: "Home",
            explore: "Explore",
            notifications: "Notifications",
            messages: "Messages",
            bookmarks: "Bookmarks",
            verified: "Verified",
            profile: "Profile",
            settings: "Settings",
          },
          addTweetForm: {
            placeholder: "What is happening?!",
            buttonLabel: "Tweet",
            alertText: "Error adding tweet",
          },
          searchTextField: "Search Twitter",

          userSideProfile: {
            menuLabel1: "Add an existing account",
            menuLabel2: "Log out",
          },
          whoToFollow: {
            label: "Who to follow",
            buttonLabel: "Follow",
            more: "Show more",
          },
          topics: {
            label: "Trends for you",
            description: "Tweets",
          },
          layoutTitles: {
            home: {
              main: "Home",
              sections: { title1: "For you", title2: "Following" },
            },
            notifications: {
              main: "Notifications",
              sections: {
                title1: "All",
                title2: "Verified",
                title3: "Mentions",
              },
            },
            messages: "Messages",
            bookmarks: "Bookmarks",
            verified: "Verified",
            settings: "Settings",
            displaySettings: {
              main: "Display",
              background: "Background",
              description:
                "Manage your background. This settings affect all the Twitter accounts on this browser.",
              buttonLabels: {
                light: "Default",
                dark: "Dim",
              },
            },
            languagesSettings: {
              main: "Languages",
              displayLaguage: "Display language",
              description1:
                "Manage which languages are used to personalize your Twitter experience.",
              description2:
                "Select your preferred language for headlines, buttons, and other text from Twitter.",
            },
            fullTweet: "Tweet",
          },
        },
      },
      ru: {
        translation: {
          sideMenu: {
            home: "Главная",
            explore: "Обзор",
            notifications: "Уведомления",
            messages: "Сообщения",
            bookmarks: "Заметки",
            verified: "Подлинная",
            profile: "Профиль",
            settings: "Настройки",
          },
          addTweetForm: {
            placeholder: "Что происходит?!",
            buttonLabel: "Твитнуть",
            alertText: "Ошибка при добавлении твита",
          },
          searchTextField: "Поиск в Твиттере",

          userSideProfile: {
            menuLabel1: "Добавить существующую учетную запись",
            menuLabel2: "Выйти из учетной записи",
          },
          whoToFollow: {
            label: "Кого читать",
            buttonLabel: "Читать",
            more: "Показать еще",
          },
          topics: {
            label: "Актуальные темы",
            description: "Твитов",
          },
          layoutTitles: {
            home: {
              main: "Главная",
              sections: { title1: "Для вас", title2: "Вы читаете" },
            },
            notifications: {
              main: "Уведомления",
              sections: {
                title1: "Все",
                title2: "Подлинная",
                title3: "Упоминания",
              },
            },
            messages: "Сообщения",
            bookmarks: "Закладки",
            verified: "Подлинная",
            settings: "Настройки",
            displaySettings: {
              main: "Оформление",
              background: "Фон",
              description:
                "Управляйте фоном. Эта настройка влияет на все учетные записи Твиттера на этом устройстве.",
              buttonLabels: {
                light: "По умолчанию",
                dark: "Сумерки",
              },
            },
            languagesSettings: {
              main: "Языки",
              displayLaguage: "Язык отображения",
              description1:
                "Управляйте языками, которые используются для персонализации Твиттера.",
              description2:
                "Выберите язык, на котором вы хотите видеть заголовки, кнопки и другой текст в интерфейсе Твиттера.",
            },
            fullTweet: "Твит",
          },
        },
      },
    },
  });

export default i18n;
