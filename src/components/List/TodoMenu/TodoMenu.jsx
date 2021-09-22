import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CloseIcon from "@material-ui/icons/Close";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { MenuItem, MenuItemName, TodoMenuWrapper } from "./styles";

const useStyles = makeStyles({
  root: {
    padding: "10px",
  },
});

const TodoMenu = ({
  item,
  checkItem,
  deleteItem,
  editItem,
  toggle,
  isOpen,
  isTodo,
}) => {
  const classes = useStyles();
  return (
    <TodoMenuWrapper
      style={{
        transform:
          isOpen && isTodo === item.id ? "translateY(0)" : "translateY(100%)",
      }}
    >
      <MenuItem>
        <MenuItemName>mark as done</MenuItemName>
        <IconButton
          className={classes.root}
          size="medium"
          onClick={() => checkItem(item.id)}
        >
          <CheckCircleOutlineIcon
            variant="outlined"
            style={{ color: item?.done ? "gray" : "white" }}
          />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <MenuItemName>edit</MenuItemName>

        <IconButton
          className={classes.root}
          size="medium"
          onClick={() => editItem(item.id)}
        >
          <CreateIcon style={{ color: "white" }} />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <MenuItemName>delete</MenuItemName>
        <IconButton
          className={classes.root}
          size="medium"
          onClick={() => deleteItem(item.id)}
        >
          <DeleteIcon style={{ color: "white" }} />
        </IconButton>
      </MenuItem>
      <IconButton
        onClick={() => toggle(item.id)}
        size="small"
        style={{
          position: "absolute",
          right: "1px",
          top: "2px",
          color: "white",
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </TodoMenuWrapper>
  );
};

export default TodoMenu;
