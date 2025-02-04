import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

import { Task } from "../../entities/Task";

interface Props {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
}

export const TaskList = ({ tasks, toggleTaskDone }: Props) => {
  return (
    <List>
      {tasks.map((task) => {
        const labelId = `checkbox-list-label-${task.id}`;

        return (
          <ListItem
            key={task.id}
            secondaryAction={
              <IconButton edge="end" aria-label="details">
                <InfoIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={() => toggleTaskDone(task.id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={task.done}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={task.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
