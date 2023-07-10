import formatDistance from "date-fns/formatDistance";
import ruLang from "date-fns/locale/ru";
import enLang from "date-fns/locale/en-US";
import i18next from "i18next";

export const formatDate = (date: Date): string => {
  return i18next.language === "en"
    ? formatDistance(date, new Date(), { locale: enLang })
    : formatDistance(date, new Date(), { locale: ruLang });
};
