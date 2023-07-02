import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import { GetMenu } from "./types";

export const menuItems: GetMenu = (currentUser) => {
  return [
    { link: "/home", icon: <HomeOutlinedIcon />, label: "Главная" },
    { link: "explore", icon: <SearchIcon />, label: "Обзор" },
    {
      link: "notifications",
      icon: <NotificationsOutlinedIcon />,
      label: "Уведомления",
    },
    { link: "messages", icon: <EmailOutlinedIcon />, label: "Сообщения" },
    { link: "bookmarks", icon: <BookmarkBorderIcon />, label: "Закладки" },
    { link: "#", icon: <AddTaskOutlinedIcon />, label: "Подлинная" },
    {
      link: `${currentUser}`,
      icon: <PermIdentityOutlinedIcon />,
      label: "Профиль",
    },
    { link: "settings", icon: <PendingOutlinedIcon />, label: "Ещё" },
  ];
};
