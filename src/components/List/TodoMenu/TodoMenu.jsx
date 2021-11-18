import { CheckCircleOutline, Close, Create, Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { MenuItem, MenuItemName, TodoMenuWrapper, useStyles } from "./styles";

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
          <CheckCircleOutline
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
          <Create style={{ color: "white" }} />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <MenuItemName>delete</MenuItemName>
        <IconButton
          className={classes.root}
          size="medium"
          onClick={() => deleteItem(item.id)}
        >
          <Delete style={{ color: "white" }} />
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
        <Close fontSize="small" />
      </IconButton>
    </TodoMenuWrapper>
  );
};

export default TodoMenu;
