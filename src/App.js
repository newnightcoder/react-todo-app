import React, { useEffect, useState } from "react";
import { Plus } from "react-bootstrap-icons";
import { AppWrapper, Container, PlusBtn } from "./AppStyles";
import { Footer, FormDrawer, Header, List } from "./components/index";

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
        <Footer dark={dark} todos={todos} />
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
