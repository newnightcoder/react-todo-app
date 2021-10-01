import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { ThreeDotsVertical, XCircle } from "react-bootstrap-icons";
import { useTransition } from "react-spring";
import { compareTime, formatTime } from "./formatTime";
import { imgHandler } from "./imgHandler";
import {
  FilterBtn,
  FilterBtnWrapper,
  FilterCategoryBtn,
  FilterDateBtn,
  Header,
  IconCatContainer,
  ListContainer,
  ResetBtn,
  StyledTodo,
  TaskContainer,
  TimeContainer,
  TodoList,
} from "./styles";
import TodoMenu from "./TodoMenu/TodoMenu";

const List = ({
  todos,
  selectEditTodo,
  checkItem,
  deleteItem,
  displayFilteredTodos,
  todosToDisplay,
  dark,
  openTodoMenu,
  closeTodoMenu,
  isTodo,
  isMenuOpen,
}) => {
  const [isFilter, setIsFilter] = useState(false);

  const animateFilter = () => {
    setIsFilter(true);
  };

  let filteredTodos = [];
  const filterTodos = () => {
    switch (todosToDisplay) {
      case "all":
        return (filteredTodos = todos);
      case "done":
        return (filteredTodos = todos.filter((todo) => todo.done));
      case "not done":
        return (filteredTodos = todos.filter((todo) => !todo.done));
      case "by date":
        return (filteredTodos = compareTime(todos));
      case "by category":
        let sortedByDate = [];
        sortedByDate = compareTime(todos);
        return (filteredTodos = sortedByDate.sort((a, b) => {
          if (a.categoryNumber < b.categoryNumber) return -1;
          if (a.categoryNumber > b.categoryNumber) return 1;
          return 0;
        }));
      case "reset":
        return (filteredTodos = todos.sort((a, b) => {
          if (a.id < b.id) return 1;
          if (a.id > b.id) return -1;
          return 0;
        }));
      default:
        return (filteredTodos = todos);
    }
  };

  filterTodos();

  const transition = useTransition(filteredTodos, (todo) => todo.id, {
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  return (
    <ListContainer>
      <Header>
        <span>inbox</span>
        <FilterBtnWrapper>
          <FilterBtn
            onClick={() => animateFilter()}
            style={{ display: isFilter ? "none" : "block" }}
          >
            filter
          </FilterBtn>
          <FilterCategoryBtn
            onClick={() => displayFilteredTodos("by category")}
            style={{
              transform: isFilter
                ? "scaleX(1) translateX(-100%)"
                : "scaleX(0) translate(15%)",
              zIndex: isFilter ? 10 : -1,
            }}
          >
            by category
          </FilterCategoryBtn>
          <FilterDateBtn
            onClick={() => displayFilteredTodos("by date")}
            style={{
              transform: isFilter
                ? "scaleX(1) translateX(20%)"
                : "scaleX(0) translate(40%)",
              zIndex: isFilter ? 10 : -2,
            }}
          >
            by date
          </FilterDateBtn>
          {isFilter && (
            <ResetBtn
              onClick={() => {
                displayFilteredTodos("reset");
                setIsFilter(false);
              }}
            >
              <XCircle />
            </ResetBtn>
          )}
        </FilterBtnWrapper>
      </Header>
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
            <IconCatContainer
              style={{ borderWidth: item.done ? "1px" : "2px" }}
            >
              {imgHandler(item.icon, item.done)}
            </IconCatContainer>
            <TaskContainer>{item.task}</TaskContainer>
            <TimeContainer>
              {formatTime(
                item.selectedDate.split("-").map((number) => +number)[0],
                item.selectedDate.split("-").map((number) => +number)[1],
                item.selectedDate.split("-").map((number) => +number)[2]
              )}
            </TimeContainer>
            <IconButton size="small" onClick={() => openTodoMenu(item.id)}>
              <ThreeDotsVertical style={{ cursor: "pointer" }} />
            </IconButton>

            <TodoMenu
              item={item}
              selectEditTodo={selectEditTodo}
              checkItem={checkItem}
              deleteItem={deleteItem}
              open={openTodoMenu}
              close={closeTodoMenu}
              isOpen={isMenuOpen}
              isTodo={isTodo}
            />
          </StyledTodo>
        ))}
      </TodoList>
    </ListContainer>
  );
};

export default List;
