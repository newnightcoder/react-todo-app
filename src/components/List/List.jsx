import { IconButton } from "@material-ui/core";
import React from "react";
import { Plus, ThreeDotsVertical } from "react-bootstrap-icons";
import { useTransition } from "react-spring";
import { imgHandler } from "./imgHandler";
import {
  Header,
  IconCatContainer,
  ListContainer,
  PlusBtn,
  StyledTodo,
  TodoList,
} from "./styles";
import TodoMenu from "./TodoMenu/TodoMenu";

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

const List = ({
  todos,
  editItem,
  checkItem,
  deleteItem,
  todosToDisplay,
  toggleDrawer,
  dark,
  toggleTodoMenu,
  isTodo,
  isMenuOpen,
}) => {
  let filteredTodos = [];
  if (todosToDisplay === "all") {
    filteredTodos = todos;
  }
  // } else if (todosToDisplay === "done") {
  //   filteredTodos = todos.filter((todo) => todo.done);
  // } else if (todosToDisplay === "to-do") {
  //   filteredTodos = todos.filter((todo) => !todo.done);
  // }

  const transition = useTransition(filteredTodos, (todo) => todo.id, {
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  return (
    <ListContainer>
      <Header>inbox</Header>

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
            <IconButton size="small" onClick={() => toggleTodoMenu(item.id)}>
              <ThreeDotsVertical style={{ cursor: "pointer" }} />
            </IconButton>

            <TodoMenu
              item={item}
              editItem={editItem}
              checkItem={checkItem}
              deleteItem={deleteItem}
              toggle={toggleTodoMenu}
              isOpen={isMenuOpen}
              isTodo={isTodo}
            />
          </StyledTodo>
        ))}
      </TodoList>
      <PlusBtn dark={dark} onClick={toggleDrawer}>
        <Plus style={{ pointerEvents: "none" }} />
      </PlusBtn>
    </ListContainer>
  );
};

export default List;
