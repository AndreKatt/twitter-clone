import { HeaderSectionTitleType } from "../types";

type Titles = {
  main: string;
  sections?: HeaderSectionTitleType[];
};

export type HeaderTitles = {
  home: Titles;
  explore: Titles;
  notifications: Titles;
  messages: Titles;
  bookmarks: Titles;
  verified: Titles;
  settings: Titles;
  display: Titles;
  displayLaguage: Titles;
  background: Titles;
  languages: Titles;
  fullTweet: Titles;
};
