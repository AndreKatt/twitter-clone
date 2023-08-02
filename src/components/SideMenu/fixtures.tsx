import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
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
      link: "explore",
      icon: <SearchIcon />,
      label: `${t("sideMenu.explore")}`,
    },
    {
      link: "notifications",
      icon: <NotificationsOutlinedIcon />,
      label: `${t("sideMenu.notifications")}`,
    },
    {
      link: "messages",
      icon: <EmailOutlinedIcon />,
      label: `${t("sideMenu.messages")}`,
    },
    {
      link: "bookmarks",
      icon: <BookmarkBorderIcon />,
      label: `${t("sideMenu.bookmarks")}`,
    },
    {
      link: "#",
      icon: <AddTaskOutlinedIcon />,
      label: `${t("sideMenu.verified")}`,
    },
    {
      link: `${currentUser}`,
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
