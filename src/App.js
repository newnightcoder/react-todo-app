import React, { useEffect, useState } from "react";
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
  width: 400px;
  display: grid;
  grid-template-rows: 30vh 1fr 80px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  position: relative;
  margin: 0;
  // overflow: hidden;
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

const PlusBtn = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2ebaee;
  background-color: deepskyblue;
  filter: drop-shadow(5px 5px 5px #2ebaee);
  color: rgb(253, 253, 253);
  font-size: 3rem;
  font-weight: 300;
  z-index: 100;
  position: absolute;
  right: 25px;
  bottom: 35px;
  transition: transform 250ms;
  ${({ dark }) => dark && `border:1px solid rgba(200, 200, 200)`};

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    border-color: deepskyblue;
    ${({ dark }) => dark && `border:1px solid #f8bbd0`};
  }
`;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todosToDisplay, setTodosToDisplay] = useState("all");
  const [dark, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((dark) => !dark);
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
        <PlusBtn dark={dark}>
          <span role="img" aria-label="test de">
            +
          </span>
        </PlusBtn>
        {/* <Form addItem={addItem} dark={dark} darkToggle={toggleDarkMode} /> */}
        <Footer dark={dark} />
        <FormDrawer />
      </Container>
    </AppWrapper>
  );
};
export default App;
