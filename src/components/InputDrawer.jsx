import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { ChevronLeft, Sliders } from "react-bootstrap-icons";
import styled from "styled-components";

const DrawerContainer = styled.div`
  height: 100%;
  width: inherit;
  padding: 20px 30px;
  display: grid;
  grid-template-rows: 5vh 1fr 5vh;
  background-color: #46529d;
  color: white;
  // transform: translateX(100%);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 110;
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

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border: 1px solid white;
`;

// const ActualForm = styled(FormGroup)`
//   height: 60%;
//   width: 100%;
//   display: flex;
//   flexdirection: column;
//   color: white;

//   margin: 25px 0;
//   border: 1px solid white;
// `;

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
      color: "white",
    },

    "& .MuiOutlinedInput-root.Mui-focused, .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
      borderRadius: "0",
    },
  },
});

const FormDrawer = () => {
  const classes = useStyles();

  return (
    <DrawerContainer>
      <Header>
        <ChevronLeft color="deepskyblue" size={24} />
        <Title>Add new thing</Title>
        <Sliders color="deepskyblue" size={24} />
      </Header>
      <FormWrapper>
        <form className={classes.group} noValidate autoComplete="off">
          <TextField
            className={classes.root}
            select
            children={("a", "c", "c")}
            label="Category"
            value=""
          />
          <TextField
            className={classes.root}
            id="outlined-basic"
            label="Your thing to do"
            variant="outlined"
          />
          <TextField
            className={classes.root}
            id="outlined-basic"
            label="When"
            variant="outlined"
          />
          <SubmitBtn>add your thing</SubmitBtn>
        </form>
      </FormWrapper>
    </DrawerContainer>
  );
};

export default FormDrawer;
