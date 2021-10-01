import DateFnsUtils from "@date-io/date-fns";
import { MenuItem, TextField } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "date-fns";
import isPast from "date-fns/isPast";
import React, { useEffect, useState } from "react";
import { ChevronLeft } from "react-bootstrap-icons";
import { imgHandler } from "./imgHandler";
import {
  Btn,
  DrawerContainer,
  FormWrapper,
  Header,
  IconContainer,
  Modal,
  ModalContainer,
  SubmitBtn,
  Title,
  useStyles,
} from "./styles";

// today's date for datepicker default value
const curr = new Date();
curr.setDate(curr.getDate());
const today = curr.toISOString().substr(0, 10);

const FormDrawer = ({
  isOpen,
  toggleFormDrawer,
  addItem,
  todoEdit,
  editItem,
}) => {
  const [category, setCategory] = useState("");
  const [categoryNumber, setCategoryNumber] = useState(1);
  const [icon, setIcon] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [selectedDate, setSelectedDate] = useState(today);
  const [isSubmitBtn, setIsSubmitBtn] = useState(false);
  const [id, setId] = useState(undefined);
  const [error, setError] = useState("");

  useEffect(() => {
    if (todoEdit !== null) {
      setIcon(todoEdit.icon);
      setCategory(todoEdit.icon);
      setCategoryNumber(todoEdit.categoryNumber);
      setNewTodo(todoEdit.task);
      setSelectedDate(todoEdit.selectedDate);
      setId(todoEdit.id);
    } else {
      setTimeout(() => {
        setIcon("");
        setCategory("");
        setCategoryNumber(1);
        setNewTodo("");
        setSelectedDate(today);
        setId(undefined);
      }, 1000);
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
        setCategoryNumber(2);
        break;
      case "work":
        setIcon("work");
        setCategoryNumber(3);
        break;
      case "health":
        setIcon("health");
        setCategoryNumber(4);
        break;
      case "groceries":
        setIcon("groceries");
        setCategoryNumber(5);
        break;
      case "shopping":
        setIcon("shopping");
        setCategoryNumber(6);
        break;
      case "project":
        setIcon("project");
        setCategoryNumber(7);
        break;
      default:
        setIcon("pen");
        setCategoryNumber(1);
        break;
    }
  };

  const handleCloseBtn = () => {
    setIsSubmitBtn(true);
    setTimeout(() => {
      setIsSubmitBtn(false);
    }, 300);
  };
  const resetForm = () => {
    setNewTodo("");
    setId(undefined);
    setSelectedDate(today);
    setCategory("");
    setTimeout(() => {
      setIcon("");
    }, 400);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (id !== undefined) return;
    if (todoEdit !== null) return;
    if (newTodo.trim().length === 0) {
      const errorMsg = "Your thing is empty! \n Please type a thing to do.";
      setError(errorMsg);
      return;
    }
    const year = selectedDate.split("-").map((number) => +number)[0];
    const month = selectedDate.split("-").map((number) => +number)[1] - 1;
    const day = selectedDate.split("-").map((number) => +number)[2] + 1;

    if (isPast(new Date(year, month, day))) {
      const errorMsg =
        "The date you selected is in the past!\n We can't go back in time unfortunately!\nPlease choose a date starting from today.";
      setError(errorMsg);
      return;
    }

    const todo = {
      icon,
      categoryNumber,
      task: newTodo,
      selectedDate,
      id: Date.now(),
      done: false,
    };

    addItem(todo);
    handleCloseBtn();
    setTimeout(() => {
      resetForm();
    }, 400);
  };

  const handleEditTodo = (e) => {
    e.preventDefault();
    if (id === undefined) return;
    const todo = {
      icon,
      categoryNumber,
      task: newTodo,
      selectedDate,
      id,
      done: false,
    };
    console.log("edited todo!", todo);
    editItem(id, todo);
    resetForm();
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
        <Btn onClick={() => toggleFormDrawer(error)}>
          <ChevronLeft color="deepskyblue" size={24} />
        </Btn>
        <Title>{id === undefined ? "Add new thing" : "Edit your thing"}</Title>
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
              onClick={() =>
                setTimeout(() => {
                  toggleFormDrawer(error);
                }, 250)
              }
            >
              {id !== undefined ? "edit" : "add your thing"}
            </SubmitBtn>
          </form>
        </MuiPickersUtilsProvider>
      </FormWrapper>
      <ModalContainer
        style={{
          opacity: error !== "" ? 1 : 0,
          zIndex: error !== "" ? 200 : -10,
        }}
      >
        <Modal>{error}</Modal>
      </ModalContainer>
    </DrawerContainer>
  );
};

export default FormDrawer;
