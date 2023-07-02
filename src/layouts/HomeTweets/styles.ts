import { styled } from "@mui/system";

export const CircularProgressWrapper = styled("div")({
  textAlign: "center",
  paddingTop: 150,
});

export const AddTweetWrapper = styled("div")({
  padding: 20,
});

export const AddTweetBottomLine = styled("div")(({ theme }) => ({
  height: 12,
  backgroundColor: theme.palette.neutral.light,
}));
