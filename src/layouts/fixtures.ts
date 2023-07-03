import { HeaderTitles } from "./types";

export const titles: HeaderTitles = {
  home: {
    main: "Главная",
    sections: [
      { item: { title: "Для вас", active: true } },
      { item: { title: "Вы читаете", active: false } },
    ],
  },
  explore: {
    main: "Актуальные темы для вас",
  },
  notifications: {
    main: "Уведомления",
    sections: [
      { item: { title: "Все", active: true } },
      { item: { title: "Подлинная", active: false } },
      { item: { title: "Упоминания", active: false } },
    ],
  },
  messages: {
    main: "Сообщения",
  },
  bookmarks: {
    main: "Закладки",
  },
  verified: {
    main: "Подлинная",
  },
  settings: {
    main: "Настройки",
  },
  display: {
    main: "Оформление",
  },
  languages: {
    main: "Языки",
  },
  displayLaguage: {
    main: "Язык отображения",
  },
  background: {
    main: "Фон",
  },
  fullTweet: {
    main: "Твит",
  },
};

export const languagesDescriptions = {
  languages:
    "Управляйте языками, которые используются для персонализации Твиттера.",
  displayLaguage:
    "Выберите язык, на котором вы хотите видеть заголовки, кнопки и другой текст в интерфейсе Твиттера.",
};

export const displayDescription =
  "Управляйте фоном. Эта настройка влияют на все учетные записи Твиттера на этом устройстве.";
