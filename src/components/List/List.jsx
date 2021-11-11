import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { Filter, ThreeDotsVertical } from "react-bootstrap-icons";
import { useTransition } from "react-spring";
import { compareTime, formatTime } from "./formatTime";
import { imgHandler } from "./imgHandler";
import {
  EmptyListMessage,
  FilterBtn,
  FilterBtnsContainer,
  FilterBtnWrapper,
  FilterCategoryBtn,
  FilterDateBtn,
  Header,
  IconCatContainer,
  ListContainer,
  MessageContainer,
  ResetBtn,
  SpanInbox,
  SpanPlusBtn,
  StatusMessage,
  StyledTodo,
  TaskContainer,
  TimeContainer,
  TodoList,
  WelcomeMessage,
} from "./styles";
import TodoMenu from "./TodoMenu/TodoMenu";

const List = ({
  todos,
  selectEditTodo,
  checkItem,
  deleteItem,
  displayFilteredTodos,
  todosToDisplay,
  statusMessage,
  dark,
  openTodoMenu,
  closeTodoMenu,
  isTodo,
  isMenuOpen,
}) => {
  const [isFilter, setIsFilter] = useState(false);
  const [active, setActive] = useState("");

  const animateFilter = () => {
    setIsFilter((isFilter) => !isFilter);
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

  let message = "";

  const displayMessage = () => {
    switch (statusMessage) {
      case "all": {
        if (todos.length === 0) return (message = "");
        return (message = "You have things to do");
      }
      case "done": {
        if (todos.length === 0) {
          return (message = "Nothing to do yet.");
        }
        if (todos.length !== 0 && filteredTodos.length === todos.length) {
          return (message = "You have done everything! Congrats!");
        }
        if (filteredTodos.length === 0) {
          return (message = "Nothing done yet...");
        }
        return (message = `You have done ${filteredTodos.length} thing${
          filteredTodos.length === 1 ? "" : "s"
        }!`);
      }
      case "not done": {
        if (todos.length === 0) {
          return (message = "Nothing to do yet.");
        }
        if (todos.length !== 0 && filteredTodos.length === 0) {
          return (message = "You have done everything! Congrats!");
        }
        return (message = `${filteredTodos.length} thing${
          filteredTodos.length === 1 ? "" : "s"
        } left to do.`);
      }
      default:
        return message;
    }
  };

  displayMessage();

  const transition = useTransition(filteredTodos, (todo) => todo.id, {
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  return (
    <ListContainer dark={dark}>
      <Header dark={dark}>
        <SpanInbox>inbox</SpanInbox>
        <MessageContainer>
          <WelcomeMessage dark={dark}>
            Welcome to your TO-DO app!
          </WelcomeMessage>
          <StatusMessage>{message}</StatusMessage>
        </MessageContainer>
        <FilterBtnWrapper>
          <FilterBtn onClick={() => animateFilter()}>
            <Filter size={18} /> sort
          </FilterBtn>
          <FilterBtnsContainer isFilter={isFilter} dark={dark}>
            <FilterCategoryBtn
              dark={dark}
              active={active === "category"}
              onClick={() => {
                displayFilteredTodos("by category");
                setActive("category");
              }}
              style={{
                transform: isFilter ? "scaleX(1)" : "scaleX(0)",
                zIndex: isFilter ? 40 : -1,
              }}
            >
              By category
            </FilterCategoryBtn>
            <FilterDateBtn
              dark={dark}
              active={active === "by date"}
              onClick={() => {
                displayFilteredTodos("by date");
                setActive("by date");
              }}
              style={{
                transform: isFilter ? "scaleX(1)" : "scaleX(0)",
                zIndex: isFilter ? 10 : -2,
              }}
            >
              By date
            </FilterDateBtn>
            <ResetBtn
              dark={dark}
              active={active === "reset"}
              onClick={() => {
                displayFilteredTodos("reset");
                setActive("reset");
              }}
            >
              Last added
            </ResetBtn>
          </FilterBtnsContainer>
        </FilterBtnWrapper>
      </Header>
      <TodoList dark={dark}>
        {todos.length === 0 && (
          <EmptyListMessage>
            <span style={{ paddingBottom: "1.5rem" }}>
              YOUR LIST IS EMPTY...
            </span>
            <div
              style={{
                fontStyle: "italic",
                width: "70%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  paddingBottom: ".33rem",
                }}
              >
                Click the&nbsp;<SpanPlusBtn dark={dark}>+</SpanPlusBtn>
                &nbsp;button
              </p>
              <p style={{ display: "flex", width: "100%" }}>
                to add a new thing to your list.
              </p>
            </div>
          </EmptyListMessage>
        )}
        {transition.map(({ item, props }) => (
          <StyledTodo
            dark={dark}
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
            <IconCatContainer dark={dark}>
              {imgHandler(item.icon, item.done, dark)}
            </IconCatContainer>
            <TaskContainer dark={dark}>{item.task}</TaskContainer>
            <TimeContainer>
              {formatTime(
                item.selectedDate.split("-").map((number) => +number)[0],
                item.selectedDate.split("-").map((number) => +number)[1],
                item.selectedDate.split("-").map((number) => +number)[2]
              )}
            </TimeContainer>
            <IconButton size="small" onClick={() => openTodoMenu(item.id)}>
              <ThreeDotsVertical
                style={{
                  cursor: "pointer",
                  color: dark ? "white" : "black",
                  transition: "color 500ms",
                }}
              />
            </IconButton>

            <TodoMenu
              dark={dark}
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
