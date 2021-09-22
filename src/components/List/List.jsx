import IconButton from "@material-ui/core/IconButton";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { useTransition } from "react-spring";
import { imgHandler } from "./imgHandler";
import {
  BtnWrapper,
  Header,
  IconCatContainer,
  ListContainer,
  StyledTodo,
  TodoList,
  useStyles,
} from "./styles";

// const formatDate = (date) => {
//   const curr = new Date();
//   curr.setDate(curr.getDate());
//   const today = curr.toISOString().substr(0, 10);
//   switch (date) {
//     case today:
//       return "yesterday";
//       break;
//     default:
//       return date;
//       break;
//   }
// };

const List = ({ todos, checkItem, deleteItem, todosToDisplay, dark }) => {
  let filteredTodos = [];
  if (todosToDisplay === "all") {
    filteredTodos = todos;
  } else if (todosToDisplay === "done") {
    filteredTodos = todos.filter((todo) => todo.done);
  } else if (todosToDisplay === "to-do") {
    filteredTodos = todos.filter((todo) => !todo.done);
  }

  const transition = useTransition(filteredTodos, (todo) => todo.id, {
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  const classes = useStyles();

  return (
    <ListContainer>
      <Header>inbox </Header>

      <TodoList>
        {transition.map(({ item, props }) => (
          <StyledTodo
            key={item.id}
            style={{
              ...props,
              textDecoration: item.done
                ? "line-through"
                : "line-through transparent",
              color: item.done ? "rgb(200,200,200)" : null,
              backgroundColor: item.done ? "" : null,
            }}
          >
            <IconCatContainer>{imgHandler(item.icon)}</IconCatContainer>
            <div>{item.task}</div>
            <div>{item.selectedDate}</div>
            <BtnWrapper>
              <IconButton
                className={classes.root}
                size="medium"
                onClick={() => checkItem(item.id)}
              >
                <CheckCircleOutlineIcon
                  variant="outlined"
                  style={{
                    cursor: "pointer",
                    color: item.done ? "lightgray" : "",
                    // color: dark ? "rgb(200,200,200)" : "dimgray",
                  }}
                  icon="check"
                  type="checkbox"
                />{" "}
              </IconButton>
              <IconButton
                className={classes.root}
                size="medium"
                onClick={() => deleteItem(item.id)}
              >
                <DeleteIcon
                  style={{
                    cursor: "pointer",
                    color: dark ? "rgb(200,200,200)" : "dimgray",
                  }}
                  icon="trash"
                />
              </IconButton>
            </BtnWrapper>
          </StyledTodo>
        ))}
      </TodoList>
    </ListContainer>
  );
};

export default List;
