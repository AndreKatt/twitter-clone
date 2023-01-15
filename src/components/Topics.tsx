import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Paper,
} from "@material-ui/core";
import { useHomeStyles } from "../pages/Home/theme";
import { useSelector } from "react-redux";
import { selectTopicsItems } from "../store/ducks/topics/selectors";
import { Link } from "react-router-dom";

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
