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
  background: {
    main: "Фон",
  },
  fullTweet: {
    main: "Твит",
  },
};
