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
  selectEditTodo,
  open,
  close,
  isOpen,
  isTodo,
  dark,
}) => {
  const classes = useStyles();
  return (
    <TodoMenuWrapper
      dark={dark}
      style={{
        transform:
          isTodo === item.id
            ? "translateY(0)"
            : isTodo === item.id * -1
            ? "translateY(100%)"
            : "translateY(100%)",
        opacity: isTodo === item.id ? 1 : isTodo === item.id * -1 ? 1 : 0,
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
          onClick={() => selectEditTodo(item.id)}
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
        onClick={() => close(item.id)}
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
