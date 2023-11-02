import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: ["en-US", "ru-RU"],
    lng: "ru-RU",
    resources: {
      en: {
        translation: {
          signIn: {
            blueSideList: {
              title1: "Read about what interests you.",
              title2: "Find out what the world is talking about",
              title3: "Join the conversation.",
            },
            rightSideText: {
              title1: "Find out what's happening in the world right now",
              title2: "Join twitter now!",
            },
            buttonLabels: {
              signUp: "Sign up",
              signIn: "Sign in",
            },
            modalBlockTitles: {
              signUp: "Create an account",
              signIn: "Sign In",
            },
            registerForm: {
              validationInfo: {
                emptyEmail: "Enter E-Mail!",
                wrongEmail: "E-Mail address is incorrect.",
                emptyUsernsme: "Enter login!",
                shortUsernsme: "Login must contain at least 2 characters.",
                emptyFullname: "Enter fullname!",
                shortFullname: "Fullname must contain at least 2 characters.",
                emptyPassword: "Enter password!",
                shortPassword: "Password must contain at least 6 characters.",
                emptyPassword2: "Confirm password!",
                wrongPassword2: "Passwords are not the same.",
              },
              fieldLabels: {
                login: "Login",
                email: "E-Mail",
                fullname: "Fullname",
                password: "Password",
                password2: "Confirm password",
              },
              buttonLabel: "Continue",
              successAlert:
                "You have successfully registered. An email has been sent to you to verify your account. After verifying your account, log in to your profile.",
              errorAlert: "Error creating account. Try later.",
            },
            signedForm: {
              validationInfo: {
                emptyEmail: "Enter E-Mail!",
                wrongEmail: "E-Mail address is incorrect.",
                emptyPassword: "Enter password!",
                shortPassword: "Password must contain at least 6 characters.",
              },
              fieldLabels: {
                email: "E-Mail",
                password: "Пароль",
              },
              buttonLabel: "Continue",
              errorAlert:
                "Failed to sign in. Wrong login or password. Or the account has not been verified.",
            },
          },
          sideMenu: {
            home: "Home",
            bookmarks: "Bookmarks",
            profile: "Profile",
            settings: "Settings",
            buttonLabel: "Tweet",
          },
          addPublicationTextForm: {
            placeholder: {
              tweet: "What is happening?!",
              reply: "Post your reply",
            },
            buttonLabel: {
              tweet: "Tweet",
              reply: "Reply",
            },
            alertText: "Error adding publication",
          },
          publication: {
            confirm: "Are you sure you want to delete this publication?",
            dateText: "ago",
            menuLabels: {
              delete: "Delete",
              pin: "Pin to your profile",
              edit: "Edit",
            },
          },
          userSideProfile: {
            menuLabel: "Log out",
          },
          rightSideBlocks: {
            more: "Show more",
          },
          whoToFollow: {
            label: "Who to follow",
          },
          followButton: { follow: "Follow", unfollow: "Unfollow" },
          layouts: {
            sections: {
              home: "For you",
              subscriptions: "Following",
              followers: "Followers",
              following: "Following",
              tweets: "Tweets",
              replies: "Replies",
              media: "Media",
              likes: "Likes",
            },
            home: "Home",
            bookmarks: "Bookmarks",
            profile: {
              registration: "Joined",
              tooltip: {
                avatar: "Set new avtar",
                photo: "Change photo",
              },
            },
            followers: "Followers",
            following: "Following",
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
              buttonLabels: {
                russian: "Russian",
                english: "English",
              },
            },
            fullPublication: "Publication",
          },
        },
      },
      ru: {
        translation: {
          signIn: {
            blueSideList: {
              title1: "Читайте о том, что вам интересно.",
              title2: "Узнайте, о чем говорят в мире.",
              title3: "Присоединяйтесь к общению.",
            },
            rightSideText: {
              title1: "Узнайте, что происходит в мире прямо сейчас",
              title2: "Присоединяйтесь к твиттеру прямо сейчас!",
            },
            buttonLabels: {
              signUp: "Зарегистрироваться",
              signIn: "Войти",
            },
            modalBlockTitles: {
              signUp: "Создайте учетную запись",
              signIn: "Войти в аккаунт",
            },
            registerForm: {
              validationInfo: {
                emptyEmail: "Введите E-Mail!",
                wrongEmail: "E-Mail адрес указан некорректно.",
                emptyUsernsme: "Введите логин!",
                shortUsernsme: "Логин должен содержать минимум 2 символа",
                emptyFullname: "Введите имя!",
                shortFullname: "Имя должено содержать минимум 2 символа",
                emptyPassword: "Введите пароль!",
                shortPassword: "Пароль должен содержать минимум 6 символов.",
                emptyPassword2: "Подтвердите пароль!",
                wrongPassword2: "Пароли не совпадают",
              },
              fieldLabels: {
                login: "Логин",
                email: "E-Mail",
                fullname: "Имя",
                password: "Пароль",
                password2: "Повторите пароль",
              },
              buttonLabel: "Далее",
              successAlert:
                "Вы успешно зарегистрированы. На вашу почту направлено письмо для подтверждения аккаунта. После подтверждения аккаунта войдите в профиль.",
              errorAlert: "Ошибка при создании аккаунта. Попробуйте позже.",
            },
            signedForm: {
              validationInfo: {
                emptyEmail: "Введите E-Mail!",
                wrongEmail: "E-Mail адрес указан некорректно.",
                emptyPassword: "Введите пароль!",
                shortPassword: "Пароль должен содержать минимум 6 символов.",
              },
              fieldLabels: {
                email: "E-Mail",
                password: "Пароль",
              },
              buttonLabel: "Далее",
              errorAlert:
                "Не удалось войти в аккаунт. Неверный логин или пароль. Или аккаунт не был подтвержден.",
            },
          },
          sideMenu: {
            home: "Главная",
            bookmarks: "Закладки",
            profile: "Профиль",
            settings: "Настройки",
            buttonLabel: "Твитнуть",
          },
          addPublicationTextForm: {
            placeholder: {
              tweet: "Что происходит?!",
              reply: "Опубликовать ответ",
            },
            buttonLabel: {
              tweet: "Твитнуть",
              reply: "Ответить",
            },
            alertText: "Ошибка при добавлении публикации",
          },
          publication: {
            confirm: "Вы действительно хотите удалить эту публикацию?",
            dateText: "назад",
            menuLabels: {
              delete: "Удалить твит",
              pin: "Закрепить в профиле",
              edit: "Редактировать",
            },
          },
          userSideProfile: {
            menuLabel: "Выйти из учетной записи",
          },
          rightSideBlocks: {
            more: "Показать еще",
          },
          whoToFollow: {
            label: "Кого читать",
          },
          followButton: { follow: "Читать", unfollow: "Отписаться" },
          layouts: {
            sections: {
              home: "Для вас",
              subscriptions: "Вы читаете",
              following: "в читаемых",
              followers: "в читателях",
              tweets: "Твиты",
              replies: "Ответы",
              media: "Медиа",
              likes: "Нравится",
            },
            home: "Главная",
            bookmarks: "Закладки",
            profile: {
              registration: "Регистрация:",
              tooltip: {
                avatar: "Добавить новый аватар",
                photo: "Изменить фото",
              },
            },
            followers: "Читатели",
            following: "Читает",
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
              buttonLabels: {
                russian: "Русский",
                english: "Английский",
              },
            },
            fullPublication: "Публикация",
          },
        },
      },
    },
  });

export default i18n;
