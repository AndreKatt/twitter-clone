import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
// types
import type { GetMenu } from "./types";

export const menuItems: GetMenu = (currentUser, t) => {
  return [
    {
      link: "/home",
      icon: <HomeOutlinedIcon />,
      label: `${t("sideMenu.home")}`,
    },
    {
      link: "bookmarks",
      icon: <BookmarkBorderIcon />,
      label: `${t("sideMenu.bookmarks")}`,
    },
    {
      link: `${currentUser}/tweets`,
      icon: <PermIdentityOutlinedIcon />,
      label: `${t("sideMenu.profile")}`,
    },
    {
      link: "settings",
      icon: <PendingOutlinedIcon />,
      label: `${t("sideMenu.settings")}`,
    },
  ];
};
