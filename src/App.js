import React, { useEffect, useState } from "react";
import { AppWrapper, Container } from "./AppStyles";
import { Footer, FormDrawer, Header, List } from "./components/index";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isTodo, setIsTodo] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [todosToDisplay, setTodosToDisplay] = useState("all");
  const [dark, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("List-Storage")) || [];
    setTodos(storedList);
  }, []);

  useEffect(() => {
    localStorage.setItem("List-Storage", JSON.stringify(todos));
  });

  const toggleDarkMode = () => {
    setDarkMode((dark) => !dark);
  };

  const toggleDrawer = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const addItem = (todo) => {
    const addedTodo = [...todos];
    addedTodo.unshift(todo);
    setTodos(addedTodo);
  };

  const toggleTodoMenu = (id) => {
    const things = [...todos];
    let stop;
    things.forEach((thing) => {
      if (thing.id === id) {
        setIsTodo(id);
        setIsMenuOpen((isMenuOpen) => !isMenuOpen);
      }
    });
  };

  const editItem = () => {};

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
          editItem={editItem}
          checkItem={checkItem}
          deleteItem={deleteItem}
          toggleDrawer={toggleDrawer}
          isTodo={isTodo}
          isMenuOpen={isMenuOpen}
          toggleTodoMenu={toggleTodoMenu}
        />

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
