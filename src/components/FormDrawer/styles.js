import { makeStyles } from "@material-ui/core/styles";
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  position: relative;
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
  position: absolute;
  left: 0;
  top: 0;
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
  font-size: 2rem;
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
    "& .MuiList-root": {
      backgroundColor: "red",
    },
    "& li": {
      fontSize: 12,
    },
  },
});

export {
  DrawerContainer,
  Header,
  Title,
  Btn,
  IconContainer,
  FormWrapper,
  SubmitBtn,
  useStyles,
};
