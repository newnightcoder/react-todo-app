import { makeStyles } from "@mui/styles";
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
  background-color: rgba(50, 50, 50, 0.75);
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;
  transition-property: opacity, transform;
  transition-duration: 125ms;
`;

const Modal = styled.div`
  height: 50%;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ dark }) => (dark ? "#111" : "#fefefe")};
  border-radius: 3px;
  color: ${({ dark }) => (dark ? "#fefefe" : "#111")};
  white-space: pre;
`;

const SpanError = styled.span`
  display: inline-block;
  text-align: center;
  line-height: 1.33rem;
  font-weight: 600;
`;

const CloseModalBtn = styled.button`
  outline: none;
  width: 30%;
  border: none;
  padding: 7px;
  background-color: deepskyblue;
  color: ${({ dark }) => (dark ? "#111" : "#fefefe")};
  font-weight: 600;
  border-radius: 3px;
  transform: translateY(100%);
  &:hover {
    cursor: pointer;
    color: ${({ dark }) => (dark ? "#fefefe" : "#111")};
  }
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
    transition: "color 200ms",
    "&:hover": {
      backgroundColor: "rgba(230,230,230,.5)",
      fontWeight: 600,
    },
  },

  inputPicker: {
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
  SpanError,
  CloseModalBtn,
  useStyles,
};
