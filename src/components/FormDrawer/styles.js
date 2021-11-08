import { createTheme, makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const DrawerContainer = styled.div`
  height: 100%;
  width: inherit;
  padding: 20px 30px;
  display: grid;
  grid-template-rows: 5vh 1fr 5vh;
  grid-gap: 20px;
  transition: background-color 500ms;
  background-color: ${({ dark }) => (dark ? "#333" : "#46529d")};
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  transition: transform 150ms ease-out;
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
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 15px 0;
  outline: none;
  border: none;
  background-color: deepskyblue;
  transition: color 500ms;
  color: ${({ dark }) => (dark ? "#333" : "#fefefe")};
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`;

const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(70, 82, 157, 0.7);
  z-index: 200;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  height: 50%;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  border: 1px solid rgba(100, 100, 100, 0.5);
  border-radius: 5px;
  color: #333;
  white-space: pre;
`;

const useStyles = makeStyles({
  group: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "white",
  },

  root: {
    "& .MuiSvgIcon-root": {
      fill: "white",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiInputBase-root": {
      color: "white",

      "&:before": {
        borderBottomColor: "white",
      },
      "&:hover:before": {
        borderBottomColor: "deepskyblue",
      },
      "&:after": {
        borderBottomColor: "deepskyblue",
      },
    },

    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "deepskyblue",
    },
  },
  item: {
    textTransform: "capitalize",
    backgroundColor: "#fefefe",
    color: "#2196f3",
    "&:focus": {
      backgroundColor: "rgba(230,230,230,.5)",
    },
  },
  picker: {
    "& .MuiSvgIcon-root": {
      fill: "white",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiInputBase-root": {
      color: "white",

      "&:before": {
        borderBottomColor: "white",
      },
      "&:hover:before": {
        borderBottomColor: "deepskyblue",
      },
      "&:after": {
        borderBottomColor: "deepskyblue",
      },
    },
    "& :hover": {
      cursor: "pointer",
    },
  },
});

const menuProps = {
  MenuProps: {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    getContentAnchorEl: null,
    MenuListProps: {
      style: {
        backgroundColor: ({ dark }) => (dark ? "red" : "#fefefe"),
      },
    },
  },
};

const calendarTheme = createTheme({
  palette: {
    primary: {
      contrastText: "#fff",
      main: "#00bbff",
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
  ModalContainer,
  Modal,
  calendarTheme,
  menuProps,
  useStyles,
};
