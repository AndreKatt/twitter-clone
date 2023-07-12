import formatDistance from "date-fns/formatDistance";
import { format } from "date-fns";
import ruLang from "date-fns/locale/ru";
import enLang from "date-fns/locale/en-US";
import i18next from "i18next";

export const formatTweetDate = (date: Date): string => {
  const locale = i18next.language === "en" ? enLang : ruLang;
  return formatDistance(date, new Date(), { locale: locale });
};

export const formatRegistrationDate = (date: Date): string => {
  const locale = i18next.language === "en" ? enLang : ruLang;
  return format(date, "d MMMM yyyy ", { locale: locale });
};
