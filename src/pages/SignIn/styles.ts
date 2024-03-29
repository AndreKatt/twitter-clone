import { styled } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Twitter from "@mui/icons-material/Twitter";
import ListItem from "@mui/material/ListItem";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SearchOutlineIcon from "@mui/icons-material/Search";
// types
import type { ContainerProps } from "@mui/material/Container";
import type { TypographyProps } from "@mui/material/Typography";
import type { ButtonProps } from "@mui/material/Button";

export const MainContainer = styled(Container)<ContainerProps>({
  height: "100vh",
  display: "flex",
  paddingLeft: "0 !important",
  marginLeft: 0,
});

export const BlueSideContainer = styled(Paper)({
  height: "100vh",
  flex: "0 0 50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#71C9F8",
  borderRadius: 0,
  overflow: "hidden",
  position: "relative",
});

export const ListInfo = styled(List)({
  position: "relative",
  width: 380,
  listStyle: "none",
  padding: 0,
  margin: 0,
  "& h6": {
    display: "flex",
    alignItems: "center",
    color: "white",
    fontWeight: 700,
    fontSize: 20,
  },
});

export const ListInfoItem = styled(ListItem)({
  marginBottom: 30,
});

export const Title = styled(Typography)<TypographyProps>({
  fontWeight: 700,
  fontSize: 32,
  marginBottom: 60,
  marginTop: 20,
});

export const SignUpButton = styled(Button)<ButtonProps>({
  marginBottom: 18,
});

export const LogoImage = styled(Twitter)({
  position: "absolute",
  left: "50%",
  top: "53%",
  transform: "translate(-50%, -50%)",
  width: "260%",
  height: "260%",
});

export const LogoIcon = styled(Twitter)({
  fontSize: 47,
});

export const LoginSideWrapper = styled(Paper)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "0 0 50%",
  overflow: "hidden",
});

export const LoginSideContainer = styled(Paper)({
  width: 380,
});

export const SearchIcon = styled(SearchOutlineIcon)({
  fontSize: 32,
  marginRight: 15,
});

export const PeopleIcon = styled(PeopleOutlineIcon)({
  fontSize: 32,
  marginRight: 15,
});

export const ChatIcon = styled(ChatBubbleOutlineOutlinedIcon)({
  fontSize: 32,
  marginRight: 15,
});
