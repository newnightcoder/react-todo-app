import styled from "styled-components";

const AppFooter = styled.footer`
  grid-row: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 0.7rem;
  transition-property: background-color, color;
  transition-duration: 500ms;
  background-color: ${({ dark }) => (dark ? "#333" : "rgb(253, 253, 253)")};
  color: ${({ dark }) => (dark ? "#fefefe" : "gray")};
  position: relative;
  box-shadow: 0 -5px 5px -5px rgba(0, 0, 0, 0.16);
`;

const CounterWrapper = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;
  padding-left: 25px;
`;

const Counter = styled.div`
  height: 20px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 5px;
  background-image: linear-gradient(to right, deepskyblue, blueviolet);
  overflow: hidden;
  position: relative;
`;

const ProgressBar = styled.div`
  height: inherit;
  width: 100%;
  background-color: rgb(253, 253, 253);
  transform-origin: right;
  transition: transform 300ms;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const CounterText = styled.div`
  width: 50%;
  color: ${({ dark }) => (dark ? "#fefefe" : "#555")};
  transition: color 500ms;
  padding-left: 3px;
`;

const Number = styled.span`
  display: inline-block;
  width: 25px;
  text-align: right;
`;

const PlusBtn = styled.button`
  width: 55px;
  height: 55px;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 25px;
  top: 0px;
  z-index: 50;
  background-color: deepskyblue;
  transition: color 500ms;
  color: ${({ dark }) => (dark ? "#333" : "rgb(253, 253, 253)")};
  font-size: 2.5rem;
  border-radius: 50%;
  border-width: 0px !important;
  transform: translateY(-50%);
  &:hover {
    cursor: pointer;
  }
`;

const Mention = styled.div`
  position: absolute;
  bottom: 10px;
  left: -5px;
  transform: translateX(50%);
`;

export {
  AppFooter,
  Counter,
  CounterWrapper,
  CounterText,
  Number,
  ProgressBar,
  PlusBtn,
  Mention,
};
