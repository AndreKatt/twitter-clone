import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {
  Avatar,
  Button,
  Divider,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { PersonAddOutlined, Search } from "@material-ui/icons";

import { Tweet } from "../../components/Tweet";
import { SideMenu } from "../../components/SideMenu";
import { AddTweetForm } from "../../components/AddTweetForm";
import { useHomeStyles } from "./theme";
import { SearchTextField } from "../../components/SearchTextField";

export const Home = (): React.ReactElement => {
  const classes = useHomeStyles();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu classes={classes} />
        </Grid>
        <Grid sm={8} md={6} item>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            <Paper>
              <div className={classes.addForm}>
                <AddTweetForm classes={classes} />
              </div>

              <div className={classes.addFormBottomLine} />
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
        <Grid sm={3} md={3} item>
          <div className={classes.rightSide}>
            <SearchTextField
              variant="outlined"
              placeholder="Поиск по твиттеру"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader}>
                <b>Актуальные темы</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Санкт-Петербург"
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов: 3 331
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Украина"
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов: +100500
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Беларусь"
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов: 12 083
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader}>
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Роберт Смит"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13INLI1-yVvnzG1s09l1vIQhyMPiqC_iiSQ&usqp=CAU"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Robbie LoveCats"
                    secondary={
                      <Typography component="span" variant="body2">
                        @TheCure
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddOutlined />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
