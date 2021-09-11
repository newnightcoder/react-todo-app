import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { animated, useTransition } from "react-spring";
import styled, { css } from "styled-components";

const ListContainer = styled.section`
  width: 400px;
  grid-row: 2;
  display: grid;
  grid-template-rows: 8vh 1fr;
  background-color: white;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thick;
  transition: background-color 500ms;
  &::-webkit-scrollbar {
    width: 0.5vw;
    background-color: white;
    ${({ dark }) => dark && `background-color:rgba(100, 100, 100, 0.2)`};
  }
  &::-webkit-scrollbar-thumb {
    width: 0.5vw;
    background-color: deepskyblue;
    ${({ dark }) => dark && `background-color:#f8bbd0`};
  }
  @media (max-width: 1023px) and (orientation: portrait) {
    width: 100%;
    /* height: 100vh; */
    padding-bottom: 150px;
  }
  @media (max-width: 1023px) and (orientation: landscape) {
    width: 100%;
    /* height: 100vh; */
    padding-bottom: 150px;
  }
  ${({ dark }) =>
    dark &&
    css`
      background-color: lightgray;
    `}
`;

const Header = styled.div`
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 0.85rem;
  font-weight: 500;
  color: gray;
  text-transform: uppercase;
  padding: 5px 20px;
`;

const TodoList = styled.ul`
  grid-row: 2;
  list-style-type: none;
  background-color: white;
  padding: 2vh 0 150px 0;
  ${({ dark }) =>
    dark &&
    css`
      background-color: lightgray;
    `}
  transition: background-color 500ms;
  @media (max-width: 1023px) and (orientation: portrait) {
    padding-bottom: 150px;
  }
`;

const StyledTodo = styled(animated.li)`
  margin-block-start: 0;
  margin-block-end: 0;
  height: 100px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: dimgray;
  font-size: 1rem;
  background-color: white;
  border-bottom: 1px solid lightgray;
  border-radius: 2px;
  // box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
  //   0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  padding: 0.5em 0 0.5em 1em;
  margin: 0 auto;
  position: relative;
  transition: text-decoration 500ms, color 500ms;
  ${({ dark }) =>
    dark &&
    css`
      background-color: #333333;
      color: rgb(200, 200, 200);
    `}
`;
const btnWrapper = {
  width: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "0",
  // border: "1px solid yellow",
};

const useStyles = makeStyles({
  root: {
    padding: "10px",
  },
});

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
            <FontAwesomeIcon icon={item.icon} /> <>{item.task}</>{" "}
            <>{item.selectedDate}</>
            <div style={btnWrapper}>
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
            </div>
          </StyledTodo>
        ))}
      </TodoList>
    </ListContainer>
  );
};

export default List;
