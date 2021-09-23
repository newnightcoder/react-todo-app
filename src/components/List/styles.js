import { animated } from "react-spring";
import styled, { css } from "styled-components";

const flexCenter =
  "display: flex; align-items: center; justify-content: center;";

const ListContainer = styled.section`
  width: 400px;
  grid-row: 2;
  margin: 0;
  display: grid;
  grid-template-rows: min-content 1fr;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-top: 30px;
  background-color: white;
  transition: background-color 500ms;
  scrollbar-width: thick;
  &::-webkit-scrollbar {
    width: 0.15vw;
    background-color: white;
    ${({ dark }) => dark && `background-color:rgba(100, 100, 100, 0.2)`};
  }
  &::-webkit-scrollbar-thumb {
    width: 0.5vw;
    background-color: deepskyblue;
    ${({ dark }) => dark && `background-color:#f8bbd0`};
  }
  @media (max-width: 1023px) {
    width: 100vw;
  }
  // @media (max-width: 1023px) and (orientation: landscape) {
  //   width: 100%;
  //   padding-bottom: 25px;
  // }
  ${({ dark }) =>
    dark &&
    css`
      background-color: lightgray;
    `}
`;

const Header = styled.div`
  grid-row: 1;
  height: 6vh;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 0.85rem;
  font-weight: 500;
  color: gray;
  text-transform: uppercase;
  background-color: white;
  padding: 5px 20px;
  position: fixed;
  top: 24.9vh;
  z-index: 20;
  @media screen and (min-width: 996px) {
    width: 400px;
  }
`;

const TodoList = styled.ul`
  grid-row: 2;
  list-style-type: none;
  background-color: white;
  padding: 2vh 0 150px 0;
  margin-block-start: 0;
  margin-block-end: 0;
  width: 100%;
  ${({ dark }) =>
    dark &&
    css`
      background-color: lightgray;
    `}
  transition: background-color 500ms;
  // @media (max-width: 1023px) and (orientation: portrait) {
  //   padding-bottom: 50px;
  // }
`;

const StyledTodo = styled(animated.li)`
  margin-block-start: 0;
  margin-block-end: 0;
  height: 100px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: dimgray;
  font-size: 1rem;
  background-color: white;
  border-bottom: 1px solid rgba(155, 155, 155, 0.2);
  padding: 0.5em 0 0.5em 1em;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  // transition: text-decoration 500ms, color 500ms;
  ${({ dark }) =>
    dark &&
    css`
      background-color: #333333;
      color: rgb(200, 200, 200);
    `}
`;

const IconCatContainer = styled.div`
  ${flexCenter};
  height: 55px;
  width: 55px;
  border-radius: 50%;
  font-size: 1.25rem;
  border: 2px solid lightgray;
`;

const PlusBtn = styled.button`
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  position: absolute;
  right: 25px;
  bottom: 50px;
  background-color: #2ebaee;
  background-color: deepskyblue;
  color: rgb(253, 253, 253);
  font-size: 2.5rem;
  border-radius: 50%;
  border-width: 0px !important;
  outline: 0;import FormDrawer from './components/FormDrawer/FormDrawer';
  // font-weight: 600;
  // filter: drop-shadow(5px 5px 5px #2ebaee);
  transition: transform 250ms;
  ${({ dark }) => dark && `border:1px solid rgba(200, 200, 200)`};
  &:hover {
    cursor: pointer;
    // transform: scale(1.05);
    ${({ dark }) => dark && `border:1px solid #f8bbd0`};
  }
`;

export {
  ListContainer,
  Header,
  TodoList,
  StyledTodo,
  IconCatContainer,
  PlusBtn,
};
