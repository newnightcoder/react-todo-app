import styled from "styled-components";

const flexColumn = `display: flex;
flex-direction: column;
justify-content: center;
align-items: center`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 150px;
  ${flexColumn};
  justify-content: flex-end;
  white-space: normal;
  color: #fefefe;
  font-size: 0.9rem;
  background-color: black;
  border-top-left-radius: 10px;
  transition: opacity 250ms;
  opacity: ${({ openModal }) => (openModal ? 1 : 0)};
  z-index: ${({ openModal }) => (openModal ? "200" : "-1")};
`;

const ModalContent = styled.div`
  height: 100%;
  ${flexColumn};
  justify-content: space-evenly;
  padding: 15px 5px 10px;
  z-index: 200;
  // border: 1px solid red;
`;

export { ModalContainer, ModalContent };
