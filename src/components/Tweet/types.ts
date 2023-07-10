import { TFunction } from "i18next";

export type TweetProps = {
  _id: string;
  text: string;
  images?: string[];
  email: string;
  fullname: string;
  userName: string;
  // avatarUrl: string;
  createdAt: string;
};

type MenuItem = { icon: JSX.Element; label: string };

type MenuItems = {
  delete: MenuItem;
  pin: MenuItem;
  edit: MenuItem;
};

export type GetMenuItems = (
  t: TFunction<"translation", undefined>
) => MenuItems;
