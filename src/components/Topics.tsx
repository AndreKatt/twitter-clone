import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";

import { selectTopicsItems } from "../store/ducks/topics/selectors";

import { useHomeStyles } from "../pages/Home/theme";

interface TopicsProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const Topics: React.FC<TopicsProps> = ({
  classes,
}): React.ReactElement => {
  const topics = useSelector(selectTopicsItems);

  return (
    <>
      <Paper className={classes.rightSideBlockHeader}>
        <b>Актуальные темы</b>
      </Paper>
      {topics.map((topic) => (
        <List key={topic._id}>
          <ListItem className={classes.rightSideBlockItem}>
            <Link
              to={`search`} // поменять на ?g=${topic.name}
            >
              <ListItemText
                primary={topic.name}
                secondary={
                  <Typography component="span" variant="body2">
                    Твитов: {topic.count}
                  </Typography>
                }
              />
            </Link>
          </ListItem>
          <Divider component="li" />
        </List>
      ))}
    </>
  );
};
