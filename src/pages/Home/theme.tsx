import { makeStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: "100vh",
  },
  logo: {
    margin: "10px 0",
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    position: "sticky",
    top: 0,
    listStyle: "none",
    padding: 0,
    margin: 0,
    maxWidth: 230,
  },
  sideMenuListItem: {
    cursor: "pointer",
    "&:hover": {
      "& div": {
        backgroundColor: "rgba(29, 161, 242, 0.1)",
        "& h6": {
          color: theme.palette.primary.main,
        },
        "& svg path": {
          fill: theme.palette.primary.main,
        },
      },
    },
    "& div": {
      display: "inline-flex",
      alignItems: "center",
      position: "relative",
      padding: "0 25px 0 25px",
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      transition: "background-color 0.1s ease-in-out",
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
    "@media(max-width: 960px)": {
      display: "none",
    },
  },
  sideMenuListItemIcon: {
    fontSize: 28,
    marginLeft: -5,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2),
    "@media(max-width: 960px)": {
      "& span": {
        display: "none",
      },
    },
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: "100%",
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    padding: "10px 15px",
    "& h6": {
      fontWeight: 800,
    },
  },
  tweet: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 15,
    paddingLeft: 20,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(245, 248, 250)",
    },
  },
  tweetContent: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 20,
  },
  tweetTextContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  tweetAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  tweetFooter: {
    display: "flex",
    position: "relative",
    left: -13,
    justifyContent: "space-between",
    width: 450,
  },
  tweetFooterIcon: {
    "&:hover": {
      "& svg path": {
        fill: theme.palette.primary.main,
      },
    },
  },
  tweetUserName: {
    color: grey[500],
  },
  rightSide: {
    paddingTop: 20,
    position: "sticky",
    top: 0,
  },
  rightSideBlock: {
    backgroundColor: "#F5F8FA",
    borderRadius: 15,
    marginTop: 20,
    "& .MuiList-root": {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: "transparent",
    padding: "13px 18px",
    "& b": {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: "pointer",
    "& .MuiTypography-body1": {
      fontWeight: 700,
    },
    "& .MuiListItemAvatar-root": {
      margin: 0,
    },
    "& .MuiListItemText-root": {
      margin: 0,
    },
    "&:hover": {
      backgroundColor: "#edf3f6",
    },
  },
  addForm: {
    padding: 20,
  },
  addFormBody: {
    display: "flex",
    width: "100%",
  },
  addFormBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addFormBottomActions: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 10,
    paddingLeft: 70,
  },
  addFormTextarea: {
    width: "100%",
    paddingLeft: 20,
    border: 0,
    fontSize: 20,
    outline: "none",
    fontFamily: "inherit",
    resize: "none",
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: "#E6ECF0",
  },
  addFormCircleProgress: {
    position: "relative",
    width: 20,
    height: 20,
    margin: "0 10px",
    "& .MuiCircularProgress-root": {
      position: "absolute",
    },
  },
  addFormButtomRight: {
    display: "flex",
    alignItems: "center",
  },
}));
