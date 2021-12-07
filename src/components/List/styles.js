import { animated } from "react-spring";
import styled from "styled-components";

const flexCenter =
  "display: flex; align-items: center; justify-content: center;";

const ListContainer = styled.section`
  width: 100vw;
  min-width: 280px;
  grid-row: 2;
  margin: 0;
  overflow-x: hidden;
  transition-properties: background-color, scrollbar-color;
  transition-duration: 500ms;
  background-color: ${({ dark }) => (dark ? "dimgray" : "#fefefe")};
  position: relative;
  overflow-y: scroll;
  scrollbar-color: ${({ dark }) =>
    dark ? "yellow rgba(100, 100, 100, 0.2)" : "deepskyblue #fefefe"};
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0.15vw;
    transition: background-color 500ms;
    background-color: ${({ dark }) =>
      dark ? "rgba(100, 100, 100, 0.2)" : "#fefefe"};
  }
  &::-webkit-scrollbar-thumb {
    width: 0.5vw;
    transition: background-color 500ms;
    background-color: ${({ dark }) => (dark ? "yellow" : "deepskyblue")};
  }
  @media (min-width: 768px) {
    width: 400px;
  }
`;

const Header = styled.div`
  height: 55px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ dark }) => (dark ? "#333" : "#fefefe")};
  color: ${({ dark }) => (dark ? "#fefefe" : "#555")};
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0 17.5px 0 25px;
  transition-property: color, background-color;
  transition-duration: 500ms;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  @media screen and (min-width: 768px) {
    width: 400px;
  }
  @media screen and (max-width: 360px) {
    padding: 0 7.5px 0 12.5px;
  }
`;

const SpanInbox = styled.span`
  display: inline-block;
  text-transform: uppercase;
  font-size: 1rem;
  visibility: hidden;
  opacity: 0;
  animation: appear 500ms forwards 2500ms;
  @keyframes appear {
    100% {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const MessageContainer = styled.div`
  ${flexCenter};
  width: 100%;
  height: 100%;
  padding: 0 10px;
  overflow: hidden;
`;

const WelcomeMessage = styled.div`
  ${flexCenter};
  width: 100%;
  height: inherit;
  font-style: italic;
  background-color: ${({ dark }) => (dark ? "#333" : "#fefefe")};
  position: relative;
  transition-property: color, background-color;
  transition-duration: 500ms;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-25%);
  position: absolute;
  left: 0;
  z-index: 100;
  animation: fadeIn 1250ms forwards, disappear 500ms forwards 2500ms;
  &::after {
    content: "";
    height: 1px;
    width: 40%;
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(200, 200, 200, 0.75);
  }
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes disappear {
    100% {
      opacity: 0;
      z-index: -1;
      visibility: hidden;
    }
  }
`;

const StatusMessage = styled.div`
  ${flexCenter};
  width: max-content;
  height: max-content;
  font-style: italic;
  position: relative;
  position: absolute;
  left: 48%;
  transform: translateX(-50%);
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  white-space: pre;
  text-align: center;
  animation: appear 1000ms forwards 3500ms;
  &::after {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    bottom: -18%;
    background-color: rgba(200, 200, 200, 0.75);
  }
  @media screen and (max-width: 358px) {
    font-size: 0.725rem;
  }
  @media screen and (max-width: 290px) {
    font-size: 0.6rem;
  }
`;

const FilterBtnWrapper = styled.div`
  height: max-content;
  width: max-content;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FilterBtn = styled.button`
  height: 25px;
  padding: 0 7px;
  ${flexCenter};
  outline: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  text-transform: uppercase;
  z-index: 100;
  position: relative;
  background-color: #46529d;
  color: white;
  font-size: 0.75rem;
  text-transform: uppercase;
  visibility: hidden;
  opacity: 0;
  animation: appear 500ms forwards 2500ms;
  &:hover {
    font-weight: 600;
  }
  @keyframes appear {
    100% {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const FilterBtnsContainer = styled.div`
  height: max-content;
  width: 100px;
  position: relative;
  ${flexCenter};
  flex-direction: column;
  align-items: flex-start;
  transform: ${({ isFilter }) => (isFilter ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  opacity: ${({ isFilter }) => (isFilter ? 1 : 0)};
  transition-property: transform, opacity, color;
  transition-duration: 250ms;
  position: absolute;
  left: -30%;
  top: 25px;
  border: 1px solid ${({ dark }) => (dark ? "#222" : "dimgray")};
  border-radius: 3px;
  @media screen and (max-width: 358px) {
    left: -40%;
  }
`;

const FilterCategoryBtn = styled.button`
  width: 100%;
  padding: 6px;
  text-align: left;
  color: ${({ dark, active }) =>
    active ? "#fefefe" : dark ? "#222" : "dimgray"};
  background-color: ${({ dark, active }) =>
    active ? "#46529d" : dark ? "rgb(150,150,150)" : "rgb(245, 245, 245)"};
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ dark }) => (dark ? "#222" : "gray")};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  transition-property: color, background-color;
  transition-duration: 150ms;
  &:hover {
    cursor: pointer;
    background-color: #46529d;
    color: #fefefe;
  }
  &:active {
    background-color: ${({ active }) => active && "#46529d"};
  }
`;

const FilterDateBtn = styled(FilterCategoryBtn)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const ResetBtn = styled(FilterCategoryBtn)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom: none;
`;

const TodoList = styled.ul`
  min-height: 100%;
  width: 100%;
  list-style-type: none;
  transition: background-color 500ms;
  background-color: ${({ dark }) => (dark ? "dimgray" : "#fefefe")};
  padding: 2vh 0 100px 0;
  margin-block-start: 0;
  margin-block-end: 0;
  position: relative;
`;

const EmptyListMessage = styled.div`
  min-height: 40vh;
  width: 100%;
  ${flexCenter};
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  color: ${({ dark }) => (dark ? "rgb(200,200,200)" : "#999")};
  transition: color 500ms;
  opacity: 0;
  transform: translateY(20%);
  animation: fadeup 500ms forwards 3000ms;
  @keyframes fadeup {
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SpanPlusBtn = styled.span`
  height: 25px;
  width: 25px;
  ${flexCenter};
  border-radius: 50%;
  font-size: 1.5rem;
  font-style: normal;
  background-color: ${({ dark }) =>
    dark ? "rgba(175, 175, 175, 0.99)" : "rgba(175, 175, 175, 0.99)"};
  color: ${({ dark }) => (dark ? " #555" : "#fefefe")};
  transition-property: color, background-color;
  transition-duration: 500ms;
`;

const StyledTodo = styled(animated.li)`
  margin-block-start: 0;
  margin-block-end: 0;
  // height: 100px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition-property: color, background-color;
  transition-duration: 500ms;
  font-size: 1rem;
  color: ${({ dark }) => (dark ? "#fefefe" : "dimgray")};
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
  transition: border 500ms;
  border: 2px solid ${({ dark }) => (dark ? "#fefefe" : "lightgray")};
`;

const TaskContainer = styled.div`
  width: 50vw;
  height: 95%;
  font-size: 0.9rem;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: color 500ms;
  color: ${({ dark }) => (dark ? "#fefefe" : "rgb(50, 50, 50)")};
  white-space: wrap;
  overflow-x: hidden;
  @media screen and (min-width: 500px) {
    width: 68vw;
  }
  @media screen and (min-width: 768px) {
    width: 175px;
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
  MessageContainer,
  WelcomeMessage,
  StatusMessage,
  EmptyListMessage,
  SpanPlusBtn,
  SpanInbox,
  FilterBtnWrapper,
  FilterBtn,
  FilterBtnsContainer,
  FilterCategoryBtn,
  FilterDateBtn,
  ResetBtn,
  TodoList,
  StyledTodo,
  TaskContainer,
  IconCatContainer,
  TimeContainer,
};
