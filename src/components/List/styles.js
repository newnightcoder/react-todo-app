import { animated } from "react-spring";
import styled, { css } from "styled-components";

const flexCenter =
  "display: flex; align-items: center; justify-content: center;";

const ListContainer = styled.section`
  width: 400px;
  grid-row: 2;
  margin: 0;
  // display: grid;
  // grid-template-rows: min-content 1fr;
  overflow-y: scroll;
  overflow-x: hidden;
  // padding-top: 30px;
  background-color: #efefef;
  transition: background-color 500ms;
  position: relative;
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
  height: 6vh;
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  font-weight: 500;
  color: gray;
  text-transform: uppercase;
  background-color: white;
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
  z-index: -1;
  transition: transform 1000ms;
  transform: scaleX(0) translate(15%, 25%);
  transform-origin: center;
  // &:hover {
  //   transform: scaleX(1) translateX(-20%);
  // }
`;
const FilterDateBtn = styled(FilterCategoryBtn)`
  background-color: aqua;
  color: gray;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  transition: transform 1000ms;
  transform: scaleX(0) translate(40%, 25%);
  transform-origin: center;
  // &:hover {
  //   transform: scaleX(1) translateX(-20%);
  // }
`;

const TodoList = styled.ul`
  height: 100%;
  width: 100%;
  list-style-type: none;
  background-color: white;
  padding: 2vh 0 150px 0;
  margin-block-start: 0;
  margin-block-end: 0;
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
  padding: 0.5em 0 0.5em 0;
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
  margin-right: 15px;
  border: 2px solid lightgray;
`;

const TaskContainer = styled.div`
  width: 15ch;
  height: 95%;
  margin-right: 10px;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(50, 50, 50);
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
  TodoList,
  StyledTodo,
  TaskContainer,
  IconCatContainer,
  TimeContainer,
};
