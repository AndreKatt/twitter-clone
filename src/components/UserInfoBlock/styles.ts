import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";

export const FullTweetContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  borderRadius: 0,
  padding: "10px 20px",
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
  "& h6": {
    fontWeight: 800,
  },
  "&:hover": {
    backgroundColor: theme.palette.neutral.light,
  },
}));

export const HeaderTextContent = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "inherit",

  "& div": {
    marginTop: -27,
  },
});
