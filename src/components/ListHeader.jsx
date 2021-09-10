import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #6c757d;
  background-color: white;
  width: 400px;
  height: 8vh;
  position: fixed;
  top: 23vh;
  /* grid-row: 1; */
  // z-index: 2;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  transition: background-color 500ms;
  /* overflow-y: hidden; */
  ${({ dark }) =>
    dark &&
    css`
      background-color: #333333;
      border-top: 1px solid white;
    `}

  @media (max-width: 1023px) {
    width: 100%;
    top: 21vh;
  }
  @media (max-width: 1023px) and (orientation: landscape) {
    /* height: 4vh; */
  }
`;

const ListCounter = styled.div`
  padding-top: 0.5vh;
  text-align: center;
  color: dimgray;
  font-style: normal;
  font-size: 1rem;
  ${({ dark }) => dark && `color:rgb(200, 200, 200)`};
  &::after {
    content: "";
    display: block;
    width: 150px;
    border-bottom: 1px solid rgb(200, 200, 200);
    margin: 1.25vh auto;
    ${({ dark }) => dark && `display:none`};
  }
  @media (max-width: 380px) and (orientation: portrait) {
    font-size: 0.75rem;
  }

  animation: fadeIn 1500ms forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(-10vh);
    }
    100% {
      opacity: 1;
      transform: translateX(-0);
    }
  }
`;

const ListHeader = ({ todos, todosToDisplay, dark }) => {
  let filteredTodos = [];
  let message = "";

  if (todosToDisplay === "all" && todos.length === 0) {
    message = "Welcome to your TO-DO app!";
  }
  if (todosToDisplay === "delete") {
    message = "Your list has been deleted!";
  }

  if (todosToDisplay === "all" && todos.length !== 0) {
    filteredTodos = todos;
    const total = filteredTodos.length;
    const doneTodos = todos.filter((todo) => todo.done);
    message = ` You have ${total} things on your list. (${doneTodos.length} things done)`;
    if (todos.length !== 0 && doneTodos.length === 0) {
      message = ` You have ${total} things on your list. (Nothing done yet.)`;
      if (total === 1) {
        message = ` You have ${total} thing on your list. (Nothing done yet.)`;
      }
    }
    if (doneTodos.length === 1) {
      message = `You have ${total} things on your list. (${doneTodos.length} thing done)`;
    } else if (total === 1 && doneTodos.length === 1) {
      message = `You have ${total} thing on your list. (${doneTodos.length} thing done)`;
    }
    if (filteredTodos.every((todo) => todo.done) && total !== 0) {
      message = "List cleared! You have done everything! 🚀";
    } else if (total === 0) {
      message = "You currently have nothing to do.";
    }
  }

  if (todosToDisplay === "done") {
    filteredTodos = todos.filter((todo) => todo.done);
    message = `You've done ${filteredTodos.length} things. Good job!`;
    if (todos.length === 0 && !todos.some((todo) => todo.done)) {
      message = "Nothing done yet. Your list is empty.";
    } else if (todos.length !== 0 && !todos.some((todo) => todo.done)) {
      message = "Nothing done yet.";
    } else if (filteredTodos.length === todos.length && todos.length !== 0) {
      message = "Nice work! All things are done! 😎";
    } else if (filteredTodos.length === 1) {
      message = "You have done 1 thing.";
    }
  }

  if (todosToDisplay === "to-do") {
    filteredTodos = todos.filter((todo) => !todo.done);
    message = `You have ${filteredTodos.length} things to do.`;
    if (filteredTodos.length === 0 && todos.length !== 0) {
      message = "You got everything done! Cheers! 🥂";
    } else if (filteredTodos.length === 0) {
      message = "Nothing to do yet. Your list is empty.";
    } else if (filteredTodos.length === 1) {
      message = "You have 1 thing to do.";
    }
  }

  return (
    <Header dark={dark}>
      <ListCounter dark={dark}>{message}</ListCounter>
    </Header>
  );
};

export default ListHeader;
