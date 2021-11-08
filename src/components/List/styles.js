import { animated } from "react-spring";
import styled from "styled-components";

const flexCenter =
  "display: flex; align-items: center; justify-content: center;";

const ListContainer = styled.section`
  width: 400px;
  grid-row: 2;
  margin: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: ${({ dark }) => (dark ? "dimgray" : "#fefefe")};
  transition: all 500ms;
  position: relative;
  scrollbar-width: thick;
  &::-webkit-scrollbar {
    width: 0.15vw;
    transition: background-color 500ms;
    background-color: ${({ dark }) =>
      dark ? "rgba(100, 100, 100, 0.2)" : "white"};
  }
  &::-webkit-scrollbar-thumb {
    width: 0.5vw;
    transition: background-color 500ms;
    ${({ dark }) => (dark ? "#f8bbd0" : "deepskyblue")};
  }
  @media (max-width: 1023px) {
    width: 100vw;
  }
`;

const Header = styled.div`
  height: 6vh;
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 500ms;
  color: ${({ dark }) => (dark ? "#fefefe" : "dimgray")};
  text-transform: uppercase;
  background-color: ${({ dark }) => (dark ? "#333" : "#fefefe")};
  padding: 5px 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  @media screen and (min-width: 996px) {
    width: 400px;
  }
`;

const FilterBtnWrapper = styled.div`
  min-height: 5vh;
  min-width: 100px;
  position: relative;
`;

const FilterBtn = styled.button`
  padding: 3px 6px;
  outline: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  text-transform: uppercase;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #46529d;
  color: white;
  font-size: 0.75rem;
  transform: translate(40%, 25%);
  // display: none;
`;

const FilterCategoryBtn = styled.button`
  padding: 3px 6px;
  outline: none;
  border: none;
  border-radius: 3px;
  background-color: aqua;
  color: gray;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: center;
  transition: transform 500ms;
`;
const FilterDateBtn = styled(FilterCategoryBtn)`
  background-color: aqua;
  color: gray;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1000ms;
  transform: scaleX(0) translate(40%, 25%);
  transform-origin: center;
`;

const ResetBtn = styled.button`
  ${flexCenter};
  height: 20px;
  width: 20px;
  border-radius: 50%;
  outline: none;
  border: none;
  color: gray;
  position: absolute;
  right: 0;
  top: 0;
`;

const TodoList = styled.ul`
  min-height: 100%;
  width: 100%;
  list-style-type: none;
  transition: background-color 500ms;
  background-color: ${({ dark }) => (dark ? "dimgray" : "#fefefe")};
  padding: 2vh 0 150px 0;
  margin-block-start: 0;
  margin-block-end: 0;
  transition: background-color 500ms;
`;

const StyledTodo = styled(animated.li)`
  margin-block-start: 0;
  margin-block-end: 0;
  height: 100px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 500ms;
  color: ${({ dark }) => (dark ? "#fefefe" : "dimgray")};
  font-size: 1rem;
  background-color: ${({ dark }) => (dark ? "dimgray" : "#fefefe")};
  border-bottom: 1px solid rgba(155, 155, 155, 0.2);
  padding: 0.5em 0 0.5em 0;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const IconCatContainer = styled.div`
  ${flexCenter};
  height: 55px;
  width: 55px;
  border-radius: 50%;
  font-size: 1.25rem;
  margin-right: 15px;
  transition: border 500ms;
  border: 2px solid ${({ dark }) => (dark ? "#fefefe" : "lightgray")};
`;

const TaskContainer = styled.div`
  width: 15ch;
  height: 95%;
  margin-right: 10px;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: color 500ms;
  color: ${({ dark }) => (dark ? "#fefefe" : "rgb(50, 50, 50)")};
  white-space: wrap;
  overflow-x: hidden;
  @media screen and (min-width: 768px) {
    width: 30ch;
  }
`;
const TimeContainer = styled.div`
  width: 12ch;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  background-color: #efefef;
  border: 1px solid #bebebe;
  border-radius: 15px;
  padding: 2px;
  font-size: 0.6rem;
  color: rgb(50, 50, 50);
`;

export {
  ListContainer,
  Header,
  FilterBtnWrapper,
  FilterBtn,
  FilterCategoryBtn,
  FilterDateBtn,
  ResetBtn,
  TodoList,
  StyledTodo,
  TaskContainer,
  IconCatContainer,
  TimeContainer,
};
