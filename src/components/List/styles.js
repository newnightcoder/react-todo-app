import { makeStyles } from "@material-ui/core/styles";
import { animated } from "react-spring";
import styled, { css } from "styled-components";

const flexCenter =
  "display: flex; align-items: center; justify-content: center;";

const ListContainer = styled.section`
  width: 400px;
  grid-row: 2;
  display: grid;
  grid-template-rows: 6vh 1fr;
  background-color: white;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thick;
  transition: background-color 500ms;
  &::-webkit-scrollbar {
    width: 0.5vw;
    background-color: white;
    ${({ dark }) => dark && `background-color:rgba(100, 100, 100, 0.2)`};
  }
  &::-webkit-scrollbar-thumb {
    width: 0.5vw;
    background-color: deepskyblue;
    ${({ dark }) => dark && `background-color:#f8bbd0`};
  }
  @media (max-width: 1023px) and (orientation: portrait) {
    width: 100%;
    /* height: 100vh; */
    padding-bottom: 150px;
  }
  @media (max-width: 1023px) and (orientation: landscape) {
    width: 100%;
    /* height: 100vh; */
    padding-bottom: 150px;
  }
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
  z-index: 50;
`;

const TodoList = styled.ul`
  grid-row: 2;
  list-style-type: none;
  background-color: white;
  padding: 2vh 0 150px 0;
  ${({ dark }) =>
    dark &&
    css`
      background-color: lightgray;
    `}
  transition: background-color 500ms;
  @media (max-width: 1023px) and (orientation: portrait) {
    padding-bottom: 150px;
  }
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
  border-bottom: 1px solid lightgray;
  // box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
  //   0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  padding: 0.5em 0 0.5em 1em;
  margin: 0 auto;
  position: relative;
  transition: text-decoration 500ms, color 500ms;
  ${({ dark }) =>
    dark &&
    css`
      background-color: #333333;
      color: rgb(200, 200, 200);
    `}
`;
const BtnWrapper = styled.div`
  ${flexCenter};
  width: 100px;
  position: absolute;
  right: 0;
  transform: translateX(150%);
  // border: 1px solid yellow;
`;

const IconCatContainer = styled.div`
  ${flexCenter};
  height: 55px;
  width: 55px;
  border-radius: 50%;
  font-size: 1.25rem;
  border: 1px solid lightgray;
`;

const useStyles = makeStyles({
  root: {
    padding: "10px",
  },
});

export {
  ListContainer,
  Header,
  TodoList,
  StyledTodo,
  BtnWrapper,
  IconCatContainer,
  useStyles,
};
