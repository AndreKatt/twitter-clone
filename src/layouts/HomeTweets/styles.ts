import { styled } from "@mui/system";

export const AddTweetWrapper = styled("div")({
  padding: 20,
});

export const AddTweetBottomLine = styled("div")(({ theme }) => ({
  height: 12,
  backgroundColor: theme.palette.neutral.light,
}));
