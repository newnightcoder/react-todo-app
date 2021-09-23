import DateFnsUtils from "@date-io/date-fns";
import { MenuItem, TextField } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "date-fns";
import React, { useEffect, useState } from "react";
import { ChevronLeft, Sliders } from "react-bootstrap-icons";
import { imgHandler } from "./imgHandler";
import {
  Btn,
  DrawerContainer,
  FormWrapper,
  Header,
  IconContainer,
  SubmitBtn,
  Title,
  useStyles,
} from "./styles";
// today's date for datepicker default value
const curr = new Date();
curr.setDate(curr.getDate());
const today = curr.toISOString().substr(0, 10);

const FormDrawer = ({ isOpen, toggleDrawer, addItem, todoEdit, editItem }) => {
  const [category, setCategory] = useState("");
  const [icon, setIcon] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [selectedDate, setSelectedDate] = useState(today);
  const [isSubmitBtn, setIsSubmitBtn] = useState(false);
  const [id, SetId] = useState(undefined);

  useEffect(() => {
    if (todoEdit !== null) {
      setIcon(todoEdit.icon);
      setCategory(todoEdit.icon);
      setNewTodo(todoEdit.task);
      setSelectedDate(todoEdit.selectedDate);
      SetId(todoEdit.id);
    }
  }, [todoEdit]);

  const selectOptions = [
    { value: "personal" },
    { value: "work" },
    { value: "health" },
    { value: "groceries" },
    { value: "shopping" },
    { value: "project" },
  ];

  const handleTodoInput = (e) => {
    setNewTodo(e.currentTarget.value);
  };

  const handleWhenInput = (date) => {
    setSelectedDate(date.toISOString().substr(0, 10));
  };

  const handleCategoryInput = (e) => {
    setCategory(e.target.value);
    switch (e.target.value) {
      case "personal":
        setIcon("personal");
        break;
      case "work":
        setIcon("work");
        break;
      case "health":
        setIcon("health");
        break;
      case "groceries":
        setIcon("groceries");
        break;
      case "shopping":
        setIcon("shopping");
        break;
      case "project":
        setIcon("project");
        break;
      default:
        setIcon("pen");
        break;
    }
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (id !== undefined) return;

    if (newTodo.trim().length === 0) return;
    if (todoEdit !== null) return;

    const todo = {
      icon,
      task: newTodo,
      selectedDate,
      id: Date.now(),
      done: false,
    };
    addItem(todo);
    setNewTodo("");
    setSelectedDate(today);
    setCategory("");
    setTimeout(() => {
      setIcon("");
    }, 300);
  };

  const handleEditTodo = (e) => {
    e.preventDefault();
    if (id === undefined) return;
    const todo = {
      icon,
      task: newTodo,
      selectedDate,
      id,
      done: false,
    };
    console.log("edited todo!", todo);
    editItem(id, todo);
    setNewTodo("");
    SetId(undefined);
    setSelectedDate(today);
    setCategory("");
    setTimeout(() => {
      setIcon("");
    }, 400);
  };

  const handleCloseBtn = () => {
    setIsSubmitBtn(true);
    setTimeout(() => {
      setIsSubmitBtn(false);
    }, 300);
  };

  const classes = useStyles();

  return (
    <DrawerContainer
      style={{
        transformOrigin: isSubmitBtn ? "center" : "right",
        transform: isOpen
          ? "translateX(0)"
          : isSubmitBtn
          ? "scale(0)"
          : "translateX(100%)",
      }}
    >
      <Header>
        <Btn onClick={toggleDrawer}>
          <ChevronLeft color="deepskyblue" size={24} />
        </Btn>
        <Title>{id === undefined ? "Add new thing" : "Edit your thing"}</Title>
        <Btn>
          <Sliders color="deepskyblue" size={24} />
        </Btn>
      </Header>
      <FormWrapper>
        <IconContainer>{imgHandler(icon)}</IconContainer>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <form
            className={classes.group}
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              handleAddTodo(e);
              handleEditTodo(e);
            }}
          >
            <TextField
              className={classes.root}
              select
              native="false"
              label="Category"
              id="standard-select"
              value={category}
              onChange={handleCategoryInput}
            >
              {selectOptions.map((option, i) => (
                <MenuItem key={i} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.root}
              id="outlined-basic"
              label="Your thing to do"
              variant="outlined"
              value={newTodo}
              onChange={handleTodoInput}
            />
            <KeyboardDatePicker
              className={classes.root}
              margin="normal"
              id="date-picker-dialog"
              label="When?"
              format="dd/MM/yyyy"
              value={selectedDate}
              placeholder="When"
              onChange={handleWhenInput}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <SubmitBtn
              type="submit"
              onClick={() => {
                handleCloseBtn();
                toggleDrawer();
              }}
            >
              {id !== undefined ? "edit" : "add your thing"}
            </SubmitBtn>
          </form>
        </MuiPickersUtilsProvider>
      </FormWrapper>
    </DrawerContainer>
  );
};

export default FormDrawer;
