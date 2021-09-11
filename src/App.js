import React, { useEffect, useState } from "react";
import { Plus } from "react-bootstrap-icons";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FormDrawer from "./components/InputDrawer";
import List from "./components/List";

const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #d6e9f8; //moondust silver
  transition: background-color 500ms;
  ${({ dark }) => dark && `background-color:#616161`};

  @media (max-width: 1023px) and (orientation: portrait) {
    background-color: transparent;
  }
`;

const Container = styled.div`
  height: 96%;
  max-height: 800px;
  width: 400px;
  display: grid;
  grid-template-rows: min-content 1fr 80px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  position: relative;
  margin: 0;
  overflow: hidden;
  // transform: translateX(-100%);

  @media (max-width: 1023px) and (orientation: portrait) {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1023px) and (orientation: landscape) {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`;

const PlusBtn = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  position: absolute;
  right: 25px;
  bottom: 35px;
  background-color: #2ebaee;
  background-color: deepskyblue;
  color: rgb(253, 253, 253);
  font-size: 2.5rem;
  border-radius: 50%;
  border-width: 0px !important;
  outline: 0;
  // font-weight: 600;
  // filter: drop-shadow(5px 5px 5px #2ebaee);

  transition: transform 250ms;
  ${({ dark }) => dark && `border:1px solid rgba(200, 200, 200)`};

  &:hover {
    cursor: pointer;
    // transform: scale(1.05);
    ${({ dark }) => dark && `border:1px solid #f8bbd0`};
  }
`;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todosToDisplay, setTodosToDisplay] = useState("all");
  const [dark, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((dark) => !dark);
  };

  const toggleDrawer = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("List-Storage")) || [];
    setTodos(storedList);
  }, []);

  useEffect(() => {
    localStorage.setItem("List-Storage", JSON.stringify(todos));
  });

  const addItem = (todo) => {
    const addedTodo = [...todos];
    addedTodo.unshift(todo);
    setTodos(addedTodo);
  };

  const checkItem = (blabla) => {
    const checkTodos = [...todos];
    checkTodos.forEach((todo) => {
      if (todo.id === blabla) todo.done = !todo.done;
    });
    setTodos(checkTodos);
  };

  const deleteItem = (blah) => {
    const deletedTodos = [...todos];
    const index = deletedTodos.findIndex((todo) => todo.id === blah);
    console.log(blah);
    deletedTodos.splice(index, 1);
    setTodos(deletedTodos);
  };

  const displayFilteredTodos = (string) => {
    setTodosToDisplay(string);
  };

  const handleDeleteMsg = (string) => {
    setTodosToDisplay(string);
    // setInterval(() => setTodosToDisplay("all"), 1000);
  };

  const clearList = () => {
    setTodos([]);
    localStorage.clear();
  };

  return (
    <AppWrapper dark={dark}>
      <Container>
        <Header
          todos={todos}
          todosToDisplay={todosToDisplay}
          filterTodos={displayFilteredTodos}
          clear={clearList}
          deleteMsg={handleDeleteMsg}
          darkToggle={toggleDarkMode}
          dark={dark}
        />
        <List
          dark={dark}
          todos={todos}
          todosToDisplay={todosToDisplay}
          checkItem={checkItem}
          deleteItem={deleteItem}
        />
        <PlusBtn dark={dark} onClick={toggleDrawer}>
          <Plus style={{ pointerEvents: "none" }} />
        </PlusBtn>
        <Footer dark={dark} />
        <FormDrawer
          isOpen={isOpen}
          toggleDrawer={toggleDrawer}
          addItem={addItem}
        />
      </Container>
    </AppWrapper>
  );
};
export default App;
