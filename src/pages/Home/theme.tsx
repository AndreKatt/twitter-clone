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
    margin: " 0 0 10px -5px",
  },

  logoIcon: {
    fontSize: 36,
  },

  // SideMenu
  sideMenuList: {
    display: "block !important",
    position: "sticky",
    top: 0,
    listStyle: "none",
    padding: 0,
    margin: 0,
    maxWidth: 230,

    "@media(max-height: 960px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  sideMenuListItem: {
    position: "relative",
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

      "@media(max-height: 790px)": {
        marginBottom: 5,
      },
      "@media(max-height: 700px)": {
        marginBottom: 0,
      },
    },
  },

  sideMenuListItemWrapper: {
    width: 0,
  },

  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,

    "@media(max-width: 959px)": {
      display: "none",
    },
  },

  sideMenuListItemIcon: {
    fontSize: 28,
    marginLeft: -14,
  },

  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2),
    width: 220,

    "& span": {
      fontSize: 17,
    },

    "@media(max-width: 959px)": {
      width: 51,
      borderRadius: "50%",
      "& span": {
        "& span": {
          display: "none",
        },
      },
    },
  },

  sideMenuButtonIcon: {
    width: 20,
    display: "none",
    color: "white",

    "@media(max-width: 959px)": {
      display: "flex",
    },
  },

  // UserSideProfile
  profileWrapper: {
    height: "60px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "fixed",
    borderRadius: "40px",
    bottom: "10px",
    cursor: "pointer",
    transition: "background-color 0.2s",
    "&:hover": {
      backgroundColor: "#e3f1fc",
    },

    "@media(max-width: 959px)": {
      width: "60px",
    },
  },

  avatar: {
    width: "40px",
    height: "40px",
    marginLeft: "12px",
  },

  userNameWrapper: {
    display: "block",
    paddingLeft: "10px",

    "@media(max-width: 959px)": {
      display: "none",
    },
  },

  userName: {
    fontSize: "15px",
  },

  button: {
    display: "block",
    padding: "0 12px 0 10px",

    "@media(max-width: 960px)": {
      display: "none !important",
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
    transition: "background-color 0.2s ease-in-out",
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
    position: "relative",
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
    display: "grid",
    paddingTop: 5,
    gridTemplateColumns: "auto 1fr",

    "@media (max-width: 1150px)": {
      gridTemplateColumns: "auto 41vw",
    },
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "auto 37vw",
    },
    "@media (max-width: 1000px)": {
      gridTemplateColumns: "auto 43vw",
    },
    "@media (max-width: 960px)": {
      gridTemplateColumns: "auto 57vw",
    },
    "@media (max-width: 923px)": {
      gridTemplateColumns: "auto 56vw",
    },
    "@media (max-width: 680px)": {
      gridTemplateColumns: "auto 52vw",
    },
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
    paddingRight: 35,
  },

  tweetTextContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    "& p": {
      display: "flex",
      flexWrap: "wrap",
    },
  },

  tweetHeaderWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
  },

  tweetMenuButton: {
    position: "absolute",
    right: 0,
    top: 0,
  },

  tweetAvatarWrapper: {
    paddingLeft: 15,
  },

  tweetAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    cursor: "pointer",
    transition: "filter 0.2s ",
    "&:hover": {
      filter: "brightness(0.8)",
    },
  },

  tweetFooter: {
    display: "grid",
    position: "relative",
    left: -13,
    width: 450,
    gridTemplateColumns: "6vw 6vw 6vw 6vw",

    "@media (max-width: 2040px)": {
      width: 430,
      gridTemplateColumns: "7vw 7vw 7vw 7vw",
    },
    "@media (max-width: 1700px)": {
      width: 430,
      gridTemplateColumns: "9vw 9vw 9vw 9vw",
    },
    "@media (max-width: 1476px)": {
      gridTemplateColumns: "10vw 10vw 10vw 10vw",
    },
    "@media (max-width: 959px)": {
      gridTemplateColumns: "13vw 13vw 13vw 13vw",
    },
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
    "& a": {
      color: "inherit",
      textDecoration: "none",
    },
    "&:hover": {
      backgroundColor: "#edf3f6",
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

  imagesList: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    flexWrap: "wrap",
  },

  imagesListItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 6,
    marginRight: 10,
    marginBottom: 10,

    "& button": {
      opacity: 0.6,
      "&:hover": {
        opacity: 1,
      },
    },
    "& svg path": {
      fill: "white",
    },
  },
}));
