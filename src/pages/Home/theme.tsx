import { grey } from "@material-ui/core/colors";
import { makeStyles, Theme } from "@material-ui/core";

export const useHomeStyles = makeStyles((theme: Theme) => ({
  centered: {
    height: 80,
    width: 80,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  wrapper: {
    height: "100vh",
  },
  logo: {
    margin: "10px 0",
  },
  logoIcon: {
    fontSize: 36,
  },

  // sideMenu
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
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
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

  // tweets
  tweetsWrapper: {
    borderRadius: 0,
    height: "100%",
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    display: "flex",
    alignItems: "center",
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    padding: "10px 15px",
    "& h6": {
      fontWeight: 800,
    },
  },
  tweetsHeaderBackButton: {
    marginRight: 20,
  },

  // tweet
  tweet: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingTop: 15,
    paddingLeft: 20,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(245, 248, 250)",
    },
  },
  tweetLink: {
    color: "inherit",
    textDecoration: "none",
  },
  tweetInfoBlock: {
    display: "flex",
    flexDirection: "column",
    "& div": {
      marginTop: -27,
    },
  },
  fullTweetWrapper: {
    borderBottom: "1px solid rgba(204, 214, 221)",
  },
  fullTweetText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    fontSize: 24,
    marginTop: -10,
    marginLeft: 5,
    lineHeight: 1.3125,
    wordBreak: "break-word",
  },
  fullTweetData: {
    marginTop: 20,
  },
  fullTweetFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "10px 20px 5px 20px",
    paddingTop: 5,
    borderTop: "1px solid rgba(204, 214, 221)",
  },
  tweetWrapper: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    padding: "10px 0 2px 0",
  },
  tweetHeaderUserContent: {
    display: "flex",
    paddingTop: 5,
  },
  tweetHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tweetContent: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 15,
  },
  tweetTextContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tweetHeaderWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  tweetMenu: {},
  tweetAvatarWrapper: {
    paddingLeft: 15,
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
  tweetsLoadingSpinner: {
    textAlign: "center",
    paddingTop: 150,
  },
  topicsLoadingSpinner: {
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 50,
  },

  // rightSide Menu
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
    "& h5": {
      // fontSize: 20,
      fontWeight: 700,
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
    "& a": {
      color: "inherit",
      textDecoration: "none",
    },
  },

  // addForm
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
