import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
// styles
import { RecommendedHeader, RecommendedItem } from "./styles";
import { InnerContainer } from "../../styles";

export const WhoToFollow: React.FC = () => {
  return (
    <InnerContainer>
      <RecommendedHeader>
        <Typography variant="h5">Кого читать</Typography>
      </RecommendedHeader>
      <List>
        <RecommendedItem>
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
            <PersonAddOutlinedIcon />
          </Button>
        </RecommendedItem>
        <Divider component="li" />
      </List>
    </InnerContainer>
  );
};
