import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import PickersDay, { pickersDayClasses } from "@mui/lab/PickersDay";
import { MenuItem, TextField, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "date-fns";
import format from "date-fns/format";
import isPast from "date-fns/isPast";
import { useEffect, useState } from "react";
import { ChevronLeft } from "react-bootstrap-icons";
import { imgHandler } from "./imgHandler";
import {
  Btn,
  CloseModalBtn,
  DrawerContainer,
  FormWrapper,
  Header,
  IconContainer,
  Modal,
  ModalContainer,
  SpanError,
  SpanErrorContainer,
  SubmitBtn,
  Title,
  useStyles,
} from "./styles";

// today's date for Mobiledatepicker default value
const curr = new Date();
curr.setDate(curr.getDate());
const today = curr.toISOString().substr(0, 10);

const MyToolbar = styled(Toolbar)({});

const FormDrawer = ({
  isOpen,
  toggleFormDrawer,
  addItem,
  todoEdit,
  editItem,
  dark,
}) => {
  const [category, setCategory] = useState("");
  const [categoryNumber, setCategoryNumber] = useState(1);
  const [icon, setIcon] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [selectedDate, setSelectedDate] = useState(today);
  const [id, setId] = useState(null);
  const [error, setError] = useState(null);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const year = selectedDate.split("-").map((number) => +number)[0];
  const month = selectedDate.split("-").map((number) => +number)[1] - 1;
  const day = selectedDate.split("-").map((number) => +number)[2] + 1;

  useEffect(() => {
    if (todoEdit) {
      setIcon(todoEdit.icon);
      setCategory(todoEdit.category);
      setCategoryNumber(todoEdit.categoryNumber);
      setNewTodo(todoEdit.task);
      setSelectedDate(todoEdit.selectedDate);
      setId(todoEdit.id);
    }
  }, [todoEdit]);

  const selectOptions = [
    { value: "Personal" },
    { value: "Work" },
    { value: "Health" },
    { value: "Groceries" },
    { value: "Shopping" },
    { value: "Project" },
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
      case "Personal":
        setIcon("personal");
        setCategoryNumber(2);
        break;
      case "Work":
        setIcon("work");
        setCategoryNumber(3);
        break;
      case "Health":
        setIcon("health");
        setCategoryNumber(4);
        break;
      case "Groceries":
        setIcon("groceries");
        setCategoryNumber(5);
        break;
      case "Shopping":
        setIcon("shopping");
        setCategoryNumber(6);
        break;
      case "Project":
        setIcon("project");
        setCategoryNumber(7);
        break;
      default:
        setIcon("pen");
        setCategoryNumber(1);
        break;
    }
  };

  const resetForm = () => {
    setId(null);
    setCategory("");
    setCategoryNumber(1);
    setNewTodo("");
    setSelectedDate(today);
    setTimeout(() => {
      setIcon("");
    }, 400);
  };

  const check = () => {
    if (newTodo.trim().length === 0) {
      const errorMsg = "Your thing is empty! \n Please type a thing to do.";
      setError(errorMsg);
      return false;
    }
    if (isPast(new Date(year, month, day))) {
      const errorMsg =
        "This date is past!\n Please select a date\n starting from today.";
      setError(errorMsg);
      return false;
    }
    return true;
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (id) return;
    if (!check()) return;
    const todo = {
      icon,
      category,
      categoryNumber,
      task: newTodo,
      selectedDate,
      id: Date.now(),
      done: false,
    };
    addItem(todo);
    handleToggleDrawer();
  };

  const handleEditTodo = (e) => {
    e.preventDefault();
    if (!id) return;
    if (!check()) return;
    const todo = {
      icon,
      category,
      categoryNumber,
      task: newTodo,
      selectedDate,
      id,
      done: false,
    };
    editItem(id, todo);
    handleToggleDrawer();
  };

  const handleToggleDrawer = () => {
    if (error) return;
    toggleFormDrawer();
    resetForm();
  };

  const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    return (
      <PickersDay
        {...pickersDayProps}
        sx={{
          [`&&.${pickersDayClasses.root}`]: {
            backgroundColor: dark ? "#333" : "#fefefe",
            color: dark ? "#fefefe" : "black",
          },
          [`&&.${pickersDayClasses.selected}`]: {
            backgroundColor: "deepskyblue",
            color: dark ? "black" : "#fefefe",
          },
        }}
      />
    );
  };

  const classes = useStyles();

  return (
    <DrawerContainer dark={dark} isOpen={isOpen}>
      <Header>
        <Btn
          onClick={() => {
            toggleFormDrawer();
            resetForm();
          }}
        >
          <ChevronLeft color="#00bbff" size={24} />
        </Btn>
        <Title>{id ? "Edit your thing" : "Add a new thing"}</Title>
      </Header>
      <FormWrapper dark={dark}>
        <IconContainer>{imgHandler(icon)}</IconContainer>
        <form
          className={classes.group}
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            todoEdit ? handleEditTodo(e) : handleAddTodo(e);
          }}
        >
          <TextField
            $dark
            className={classes.root}
            select
            variant="standard"
            label="Select a category"
            id="standard-select"
            value={category}
            onChange={handleCategoryInput}
            SelectProps={{
              MenuProps: {
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "center",
                },
                MenuListProps: {
                  style: {
                    backgroundColor: dark ? "#222" : "#fefefe",
                    textTransform: "capitalize",
                  },
                },
              },
            }}
          >
            {selectOptions.map((option, i) => (
              <MenuItem
                $dark
                style={{ color: dark ? "#fefefe" : "#2196f3" }}
                key={i}
                value={option.value}
                className={classes.item}
              >
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant="standard"
            id="standard-basic"
            className={classes.root}
            label="Your thing to do"
            value={newTodo}
            onChange={handleTodoInput}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              id="date-picker-dialog"
              value={selectedDate}
              placeholder="When"
              InputProps={{ readOnly: true }}
              inputFormat="dd/MM/yyyy"
              onChange={handleWhenInput}
              open={isPickerOpen}
              onClose={() => setIsPickerOpen(false)}
              componentsProps={{
                CalendarPickerProps: {
                  SvgIcon: {
                    fill: "white",
                  },
                },
              }}
              OpenPickerButtonProps={{
                style: {
                  color: "#fefefe",
                },
              }}
              DialogProps={{
                PaperProps: {
                  style: {
                    backgroundColor: dark ? "#333" : "#fefefe",
                    color: dark ? "#fefefe" : "black",
                  },
                },
              }}
              showToolbar={true}
              ToolbarComponent={(props) => (
                <MyToolbar
                  sx={{
                    backgroundColor: "deepskyblue",
                    borderTopLeftRadius: "3px",
                    borderTopRightRadius: "3px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "#fefefe", fontWeight: "600" }}
                    component="div"
                  >
                    {format(new Date(selectedDate), "eeee LLL do, yyyy")}
                  </Typography>
                </MyToolbar>
              )}
              renderDay={renderWeekPickerDay}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  className={classes.inputPicker}
                  label="When?"
                  onClick={() => setIsPickerOpen(true)}
                />
              )}
            />
          </LocalizationProvider>
          <SubmitBtn $dark type="submit">
            {id ? "edit" : "add your thing"}
          </SubmitBtn>
        </form>
      </FormWrapper>
      <ModalContainer
        style={{
          opacity: error ? 1 : 0,
          zIndex: error ? 200 : -10,
        }}
      >
        <Modal
          dark={dark}
          style={{
            opacity: error ? 1 : 0,
            transform: error ? "scale(1)" : "scale(0)",
          }}
        >
          <SpanErrorContainer>
            <SpanError>{error}</SpanError>
          </SpanErrorContainer>
          <CloseModalBtn dark={dark} onClick={() => setError(null)}>
            OK
          </CloseModalBtn>
        </Modal>
      </ModalContainer>
    </DrawerContainer>
  );
};

export default FormDrawer;
