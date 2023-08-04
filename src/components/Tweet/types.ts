import type { TFunction } from "i18next";
import type { TweetType } from "../../types";

export type TweetProps = {
  tweetData: TweetType;
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
