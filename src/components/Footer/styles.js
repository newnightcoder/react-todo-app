import styled from "styled-components";

const AppFooter = styled.footer`
  grid-row: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 0.7rem;
  background-color: rgb(253, 253, 253);
  color: gray;
  position: relative;
  box-shadow: 0 -5px 5px -5px rgba(0, 0, 0, 0.16);
  // border-top: 2px solid lightgray;
  // border-top: 1px solid rgba(155, 155, 155, 0.5);
`;

const CounterWrapper = styled.div`
  width: 65%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  font-size: 0.85rem;
  font-weight: 500;
  color: gray;
  text-transform: uppercase;
  padding-left: 18px;
`;

const Counter = styled.div`
  display: flex;
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
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  position: absolute;
  right: 25px;
  top: 0px;
  background-color: #2ebaee;
  background-color: deepskyblue;
  color: rgb(253, 253, 253);
  font-size: 2.5rem;
  border-radius: 50%;
  border-width: 0px !important;
  outline: 0;
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

export { AppFooter, Counter, CounterWrapper, CounterBadge, PlusBtn, Mention };
