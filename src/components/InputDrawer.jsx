import DateFnsUtils from "@date-io/date-fns";
import {
  faBriefcase,
  faLightbulb,
  faNotesMedical,
  faPen,
  faShoppingCart,
  faStore,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItem, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "date-fns";
import React, { useState } from "react";
import { ChevronLeft, Sliders } from "react-bootstrap-icons";
import styled from "styled-components";

const DrawerContainer = styled.div`
  height: 100%;
  width: inherit;
  padding: 20px 30px;
  display: grid;
  grid-template-rows: 5vh 1fr 5vh;
  grid-gap: 20px;
  background-color: #46529d;
  color: white;
  // transform: translateX(100%);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 110;
  transition: transform 150ms ease-out;
  // ${({ isOpen }) => isOpen && `transform:translateX(0)`}
`;

const Header = styled.div`
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 400;
`;

const Btn = styled.button`
  border-width: 0;
  outline: none;
  padding: 5px;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  transform: translateY(-30px);
  height: 65px;
  width: 65px;
  border-radius: 50%;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

const FormWrapper = styled.div`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border: 1px solid white;
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 15px 0;
  outline: none;
  border: none;
  background-color: deepskyblue;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 3px;
  margin-top: 25px;
  &:hover {
    cursor: pointer;
  }
`;

const useStyles = makeStyles({
  group: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    color: "white",
  },
  root: {
    "& .MuiFormLabel-root": {
      color: "white",
    },

    "& .MuiInputBase-input": {
      padding: "15px 0",
      color: "white !important",
    },
    // "& .MuiInputLabel-outlined": {
    //   transform: "translate(0, 20px)",
    // },
    // "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
    //   transform: "translate(14px, -6px) scale(0.75)",
    // },
    "& .MuiOutlinedInput-root.Mui-focused, .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
      borderRadius: "0",
    },
  },
});

const selectOptions = [
  { value: "personal" },
  { value: "business" },
  { value: "health" },
  { value: "groceries" },
  { value: "shopping" },
  { value: "project" },
];

// today's date for datepicker default value
const curr = new Date();
curr.setDate(curr.getDate());
const today = curr.toISOString().substr(0, 10);

const FormDrawer = ({ isOpen, toggleDrawer, addItem }) => {
  const [category, setCategory] = useState("");
  const [icon, setIcon] = useState(faPen);
  // useState(
  //   <FontAwesomeIcon icon={faPen} style={{ fontSize: "1.85rem" }} />
  // );
  const [newTodo, setNewTodo] = useState("");
  const [selectedDate, setSelectedDate] = useState(today);
  const [isSubmitBtn, setIsSubmitBtn] = useState(false);

  console.log("closebtn status", isSubmitBtn);

  const handleTodoInput = (e) => {
    setNewTodo(e.currentTarget.value);
  };

  const handleCategoryInput = (e) => {
    setCategory(e.target.value);
    switch (e.target.value) {
      case "personal":
        setIcon(faUserCircle);
        console.log("icon", icon);
        break;
      case "business":
        setIcon(faBriefcase);
        break;
      case "health":
        setIcon(faNotesMedical);
        break;
      case "groceries":
        setIcon(faShoppingCart);
        break;
      case "shopping":
        setIcon(faStore);
        break;
      case "project":
        setIcon(faLightbulb);
        break;
      default:
        setIcon(faPen);
        break;
    }
    console.log("select value", e.target.value);
  };

  const handleWhenInput = (date) => {
    setSelectedDate(date.toISOString().substr(0, 10));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim().length === 0) return;

    const todo = {
      category,
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
        <Title>Add new thing</Title>
        <Btn>
          <Sliders color="deepskyblue" size={24} />
        </Btn>
      </Header>
      <FormWrapper>
        <IconContainer>
          <FontAwesomeIcon icon={icon} />
        </IconContainer>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <form
            className={classes.group}
            noValidate
            autoComplete="off"
            onSubmit={handleAddTodo}
          >
            <TextField
              // className={classes.root}
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
              add your thing
            </SubmitBtn>
          </form>
        </MuiPickersUtilsProvider>
      </FormWrapper>
    </DrawerContainer>
  );
};

export default FormDrawer;
