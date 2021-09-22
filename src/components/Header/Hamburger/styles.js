import styled from "styled-components";

const HamburgerWrapper = styled.div`
  width: 30px;
  height: 25px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  &:hover {
    cursor: pointer;
  }
`;

const HamburgerBtn = styled.button`
  width: 50px;
  height: 40px;
  padding: 0;
  display: flex;
  background-color: transparent;
  outline: none;
  border-width: 0;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2.5vh;
  right: 2vh;
`;
const HamburgerLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
  padding: 0;
  margin: 0;
`;

export { HamburgerBtn, HamburgerWrapper, HamburgerLine };
