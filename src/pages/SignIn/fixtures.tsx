import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SearchIcon from "@mui/icons-material/Search";

export const listInfo = [
  {
    id: "1",
    icon: <SearchIcon style={{ fontSize: 32, marginRight: 15 }} />,
    label: "Читайте о том, что вам интересно.",
  },
  {
    id: "2",
    icon: <PeopleOutlineIcon style={{ fontSize: 32, marginRight: 15 }} />,
    label: "Узнайте, о чем говорят в мире.",
  },
  {
    id: "3",
    icon: (
      <ChatBubbleOutlineOutlinedIcon
        style={{ fontSize: 32, marginRight: 15 }}
      />
    ),
    label: "Присоединяйтесь к общению.",
  },
];
