import styled from "styled-components";

const AppFooter = styled.footer`
  grid-row: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 20px 15px;
  font-size: 0.7rem;
  background-color: rgb(253, 253, 253);
  color: gray;
  position: relative;
  border-top: 1px solid grey;
`;

const CounterWrapper = styled.div`
  width: 65%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  font-size: 0.85rem;
  font-weight: 500;
  color: gray;
  text-transform: uppercase;
  // border: 1px solid yellow;
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

const Mention = styled.div`
  position: absolute;
  bottom: 10px;
  left: -5px;
  transform: translateX(50%);
`;

export { AppFooter, Counter, CounterWrapper, CounterBadge, Mention };
