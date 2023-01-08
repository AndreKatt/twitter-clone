import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import {
  createStyles,
  InputBase,
  makeStyles,
  Paper,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

import { Tweet } from "../components/Tweet";
import { SideMenu } from "../components/SideMenu";

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
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  sideMenuListItem: {
    "& div": {
      display: "inline-flex",
      alignItems: "center",
      padding: "0 10px",
      borderRadius: 30,
      "&:hover": {
        backgroundColor: "rgba(29, 161, 242, 0.1)",
      },
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 28,
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
    paddingTop: 15,
    paddingLeft: 20,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(245, 248, 250)",
    },
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  tweetFooter: {
    display: "flex",
    position: "relative",
    left: -13,
    justifyContent: "space-between",
    width: 450,
  },
  tweetUserName: {
    color: grey[500],
  },
}));

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: "#E6ECF0",
    },
  })
)(InputBase);

export const Home = () => {
  const classes = useHomeStyles();
  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            <Tweet
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus vero, veniam eos, ipsum ut expedita laudantium voluptas error dicta earum neque tempora, ex recusandae velit aperiam eligendi officia autem."
              user={{
                fullname: "HIDEO_KOJIMA",
                userName: "HIDEO_KOJIMA_EN",
                avaterUrl:
                  "https://pbs.twimg.com/profile_images/914211724412166144/Bf2Yij9b_400x400.jpg",
              }}
              classes={classes}
            />
            <Tweet
              text="Porro optio alias saepe labore incidunt asperiores doloribus fuga sequi repellendus exercitationem iusto, aliquid laudantium repellat officiis fugit quibusdam! Libero, nam facilis."
              user={{
                fullname: "HIDEO_KOJIMA",
                userName: "HIDEO_KOJIMA_EN",
                avaterUrl:
                  "https://pbs.twimg.com/profile_images/914211724412166144/Bf2Yij9b_400x400.jpg",
              }}
              classes={classes}
            />
            <Tweet
              text="Eveniet ad aut esse nulla! In dolores vitae numquam quibusdam, quas tempora! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium aliquam aperiam nesciunt consectetur commodi iusto voluptatibus laborum recusandae soluta esse, laboriosam facere! Quae voluptates hic voluptatibus minima eveniet, earum eligendi!"
              user={{
                fullname: "HIDEO_KOJIMA",
                userName: "HIDEO_KOJIMA_EN",
                avaterUrl:
                  "https://pbs.twimg.com/profile_images/914211724412166144/Bf2Yij9b_400x400.jpg",
              }}
              classes={classes}
            />
            <Tweet
              text="Я гений!"
              user={{
                fullname: "HIDEO_KOJIMA",
                userName: "HIDEO_KOJIMA_EN",
                avaterUrl:
                  "https://pbs.twimg.com/profile_images/914211724412166144/Bf2Yij9b_400x400.jpg",
              }}
              classes={classes}
            />
            <Tweet
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus vero, veniam eos, ipsum ut expedita laudantium voluptas error dicta earum neque tempora, ex recusandae velit aperiam eligendi officia autem."
              user={{
                fullname: "HIDEO_KOJIMA",
                userName: "HIDEO_KOJIMA_EN",
                avaterUrl:
                  "https://pbs.twimg.com/profile_images/914211724412166144/Bf2Yij9b_400x400.jpg",
              }}
              classes={classes}
            />
            <Tweet
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus vero, veniam eos, ipsum ut expedita laudantium voluptas error dicta earum neque tempora, ex recusandae velit aperiam eligendi officia autem."
              user={{
                fullname: "HIDEO_KOJIMA",
                userName: "HIDEO_KOJIMA_EN",
                avaterUrl:
                  "https://pbs.twimg.com/profile_images/914211724412166144/Bf2Yij9b_400x400.jpg",
              }}
              classes={classes}
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField placeholder="Поиск по твиттеру" fullWidth />
        </Grid>
      </Grid>
    </Container>
  );
};
