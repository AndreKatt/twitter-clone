import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NumbersIcon from "@mui/icons-material/Numbers";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";

export const menuItems = [
  { link: "/home", icon: <HomeOutlinedIcon />, label: "Главная" },
  { link: "/", icon: <NumbersIcon />, label: "Обзор" },
  { link: "/", icon: <NotificationsOutlinedIcon />, label: "Уведомления" },
  { link: "/", icon: <EmailOutlinedIcon />, label: "Сообщения" },
  { link: "/", icon: <BookmarkBorderIcon />, label: "Закладки" },
  { link: "/", icon: <AddTaskOutlinedIcon />, label: "Twitter Blue" },
  { link: "/", icon: <PermIdentityOutlinedIcon />, label: "Профиль" },
  { link: "/", icon: <PendingOutlinedIcon />, label: "Ещё" },
];
