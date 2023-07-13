import Slide from "@mui/material/Slide/Slide";
import { ChatIcon, PeopleIcon, SearchIcon } from "./styles";
import { GetBlueSideList } from "./types";

export const getBlueSideList: GetBlueSideList = (t) => [
  {
    id: "1",
    icon: <SearchIcon />,
    label: `${t("signIn.blueSideList.title1")}`,
  },
  {
    id: "2",
    icon: <PeopleIcon />,
    label: `${t("signIn.blueSideList.title2")}`,
  },
  {
    id: "3",
    icon: <ChatIcon />,
    label: `${t("signIn.blueSideList.title3")}`,
  },
];

export function transition(props: any) {
  return <Slide {...props} direction="down" />;
}
