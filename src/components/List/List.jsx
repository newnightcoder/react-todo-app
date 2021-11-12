import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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
  handleTodosToDisplay,
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
  const [rows, setRows] = useState(todos);
  const [headerMessage, setHeaderMessage] = useState("");
  const height = 100;

  const animateFilter = () => {
    setIsFilter((isFilter) => !isFilter);
  };

  useEffect(() => {
    console.log(todosToDisplay);
    const filterTodos = () => {
      const todosCopy = [...todos];
      switch (todosToDisplay) {
        case "all":
          return setRows(todosCopy);
        case "done":
          return setRows(todosCopy.filter((todo) => todo.done));
        case "not done":
          return setRows(todosCopy.filter((todo) => !todo.done));
        case "by date":
          return setRows(compareTime(todosCopy));
        case "by category":
          let sortedByDate = [];
          sortedByDate = compareTime(todosCopy);
          return setRows(
            sortedByDate.sort((a, b) => {
              if (a.categoryNumber < b.categoryNumber) return -1;
              if (a.categoryNumber > b.categoryNumber) return 1;
              return 0;
            })
          );
        case "reset":
          return setRows(
            todosCopy.sort((a, b) => {
              if (a.id < b.id) return 1;
              if (a.id > b.id) return -1;
              return 0;
            })
          );
        default:
          return setRows(todosCopy);
      }
    };
    filterTodos();
  }, [todos, todosToDisplay]);

  useEffect(() => {
    const displayMessage = () => {
      switch (statusMessage) {
        case "all": {
          if (todos.length === 0) return setHeaderMessage("");
          return setHeaderMessage("You have things to do");
        }
        case "done": {
          if (todos.length === 0) {
            return setHeaderMessage("Nothing to do yet.");
          }
          if (
            todos.length !== 0 &&
            todos.filter((todo) => todo.done).length === todos.length
          ) {
            return setHeaderMessage("You have done everything! Congrats!");
          }
          if (todos.filter((todo) => todo.done).length === 0) {
            return setHeaderMessage("Nothing done yet...");
          }
          return setHeaderMessage(
            `You have done ${todos.filter((todo) => todo.done).length} thing${
              todos.filter((todo) => todo.done).length === 1 ? "" : "s"
            }!`
          );
        }
        case "not done": {
          if (todos.length === 0) {
            return setHeaderMessage("Nothing to do yet.");
          }
          if (
            todos.length !== 0 &&
            todos.filter((todo) => !todo.done).length === 0
          ) {
            return setHeaderMessage("You have done everything! Congrats!");
          }
          return setHeaderMessage(
            `${todos.filter((todo) => !todo.done).length} thing${
              todos.filter((todo) => !todo.done).length === 1 ? "" : "s"
            } left to do.`
          );
        }
        default:
          return headerMessage;
      }
    };
    displayMessage();
  }, [todos, rows, statusMessage]);

  // const transition = useTransition(filteredTodos, (todo) => todo.id, {
  //   from: { opacity: 0, transform: "scale(0)" },
  //   enter: { opacity: 1, transform: "scale(1)" },
  //   leave: { opacity: 0, transform: "scale(0)" },
  // });

  const transition = useTransition(
    rows.map((row, i) => ({ ...row, y: i * height })),
    (todo) => todo.id,
    {
      from: { opacity: 0, transform: "scale(0)" },
      enter: { opacity: 1, transform: "scale(1)" },
      leave: { opacity: 0, transform: "scale(0)" },
      // update: ({ y }) => ({ y }),
    }
  );

  return (
    <ListContainer dark={dark}>
      <Header dark={dark}>
        <SpanInbox>inbox</SpanInbox>
        <MessageContainer>
          <WelcomeMessage dark={dark}>
            Welcome to your TO-DO app!
          </WelcomeMessage>
          <StatusMessage>{headerMessage}</StatusMessage>
        </MessageContainer>
        <FilterBtnWrapper>
          <FilterBtn onClick={animateFilter}>
            <Filter
              size={18}
              style={{
                transform: isFilter ? "rotate(-180deg)" : "rotate(0deg)",
                transition: "transform 350ms",
              }}
            />{" "}
            sort
          </FilterBtn>
          <FilterBtnsContainer isFilter={isFilter} dark={dark}>
            <FilterCategoryBtn
              dark={dark}
              active={active === "category"}
              onClick={() => {
                setActive("category");
                handleTodosToDisplay("by category");
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
                setActive("by date");
                handleTodosToDisplay("by date");
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
                setActive("reset");
                handleTodosToDisplay("reset");
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
        {transition.map(({ item, props: { y, ...rest }, key }, index) => (
          <StyledTodo
            dark={dark}
            key={item.id}
            style={{
              ...rest,
              // transform: y.interpolate((y) => `translate3d(0,${y}px,0)`),
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
