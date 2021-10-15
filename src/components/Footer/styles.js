import styled from "styled-components";

const AppFooter = styled.footer`
  grid-row: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 0.7rem;
  background-color: rgb(253, 253, 253);
  background-color: ${(props) =>
    props.dark ? "dimgray" : "rgb(253, 253, 253)"};
  color: ${(props) => (props.dark ? "white" : "gray")};
  position: relative;
  box-shadow: 0 -5px 5px -5px rgba(0, 0, 0, 0.16);
  // border-top: 2px solid lightgray;
  // border-top: 1px solid rgba(155, 155, 155, 0.5);
`;

const CounterWrapper = styled.div`
  width: 75%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;
  padding-left: 18px;
`;

const Counter = styled.div`
  height: 20px;
  width: 75%;
  border: 1px solid lightgray;
  margin-right: 5px;
  border-radius: 5px;
  background-image: linear-gradient(to right, deepskyblue, blueviolet);
  overflow: hidden;
  position: relative;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(253, 253, 253);
  transform-origin: right;
  transition: transform 300ms;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
`;

const CounterBadge = styled.div`
  height: 15px;
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: grey;
  color: white;
  font-size: 0.65rem;
  font-weight: 500;
  margin-left: 7.5px;
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
  background-color: #2ebaee;
  background-color: deepskyblue;
  color: rgb(253, 253, 253);
  font-size: 2.5rem;
  border-radius: 50%;
  border-width: 0px !important;
  transform: translateY(-50%);
  // font-weight: 600;
  // filter: drop-shadow(5px 5px 5px #2ebaee);
  // transition: transform 250ms;
  ${({ dark }) => dark && `border:1px solid rgba(200, 200, 200)`};
  &:hover {
    cursor: pointer;
    // transform: scale(1.05);
    ${({ dark }) => dark && `border:1px solid #f8bbd0`};
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
  ProgressBar,
  CounterBadge,
  PlusBtn,
  Mention,
};
