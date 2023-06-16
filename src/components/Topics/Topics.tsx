import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
// local libs
import { selectTopicsItems } from "../../redux/topics/selectors";

export const Topics: React.FC = (): React.ReactElement => {
  const topics = useSelector(selectTopicsItems);

  return (
    <>
      {/* <p>BlahBlah</p> */}
      <Paper>
        <b>Актуальные темы</b>
      </Paper>
      {topics.map((topic) => (
        <List key={topic._id}>
          <ListItem>
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
