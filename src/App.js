import React, { useEffect, useState } from "react";
import { AppWrapper, Container } from "./AppStyles";
import { Footer, FormDrawer, Header, List } from "./components/index";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isTodo, setIsTodo] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(null);
  const [todoEdit, setTodoEdit] = useState(null);
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

  const toggleFormDrawer = () => {
    setIsOpen((isOpen) => !isOpen);
    setTodoEdit(null);
  };

  const addItem = (addedTodo) => {
    const todosCopy = [...todos];
    todosCopy.unshift(addedTodo);
    setTodos(todosCopy);
  };

  const openTodoMenu = (id) => {
    const todosCopy = [...todos];
    const item = todosCopy.find((todo) => todo.id === id);
    if (item) {
      setIsTodo(id);
    }
  };
  const closeTodoMenu = (id) => {
    const todosCopy = [...todos];
    const item = todosCopy.find((todo) => todo.id === id);
    if (item) {
      setIsTodo(id * -1);
    }
    setTodoEdit(null);
    setTimeout(() => {
      setIsTodo(null);
    }, 300);
  };

  const selectEditTodo = (id) => {
    const todosCopy = [...todos];
    const isItem = todosCopy.find((item) => item.id === id);
    console.log(isItem);
    setIsOpen(true);
    setTodoEdit(isItem);
  };

  const editItem = (id, editedTodo) => {
    const todosCopy = [...todos];
    const editedTodos = todosCopy.map((todo) =>
      todo.id !== id ? todo : editedTodo
    );
    setTodos(editedTodos);
    setIsTodo(null);
  };

  const checkItem = (id) => {
    const todosCopy = [...todos];
    todosCopy.forEach((todo) => {
      if (todo.id === id) todo.done = !todo.done;
    });
    setTodos(todosCopy);
    closeTodoMenu(id);
  };

  const deleteItem = (id) => {
    const todosCopy = [...todos];
    const index = todosCopy.findIndex((todo) => todo.id === id);
    console.log(id);
    todosCopy.splice(index, 1);
    setTodos(todosCopy);
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
          selectEditTodo={selectEditTodo}
          checkItem={checkItem}
          deleteItem={deleteItem}
          toggleFormDrawer={toggleFormDrawer}
          isTodo={isTodo}
          isMenuOpen={isMenuOpen}
          openTodoMenu={openTodoMenu}
          closeTodoMenu={closeTodoMenu}
        />

        <Footer dark={dark} todos={todos} />
        <FormDrawer
          editItem={editItem}
          isOpen={isOpen}
          todoEdit={todoEdit}
          toggleFormDrawer={toggleFormDrawer}
          addItem={addItem}
        />
      </Container>
    </AppWrapper>
  );
};
export default App;
