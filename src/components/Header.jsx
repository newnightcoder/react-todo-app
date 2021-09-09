import React, { useState } from "react";
import styled from "styled-components";
import img from "../img/mountains/7.jpg";
import BtnDrawer from "./BtnDrawer";
import DateAndTime from "./DateAndTime";

// const HeaderImg = styled.div`
//   background: url(${img}) no-repeat center/cover;
//   height: 100%;
//   width: 100%;
//   border: 2px solid red;
// `;

const AppHeader = styled.div`
  grid-row: 1;
  width: 400px;
  padding-left: 1.75vw;
  background: linear-gradient(rgb(63, 65, 255, 0.3), rgb(63, 65, 255, 0.3)),
    url(${img}) no-repeat center/cover;
  // mix-blend-mode: ;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  white-space: nowrap;
  overflow: hidden !important;
  &::after {
    content: "";
    width: calc(65% - (1.75vw / 2));
    height: 4px;
    background: linear-gradient(to right, rgba(63, 65, 255, 0.6), #44d7ff);
    position: absolute;
    bottom: 0;
    left: 0;
  }
  @media (max-width: 1023px) and (orientation: portrait) {
    width: 100%;
    &::after {
      display: none;
    }
  }
  @media (max-width: 1023px) and (orientation: landscape) {
    width: 100%;
    padding: 0 0 0 1vw;
    &::after {
      display: none;
    }
  }
`;

const DarkModeBtn = styled.button`
  height: 20px;
  width: 20px;
  background-color: transparent;
  border-radius: 50%;
  outline: none;
  border: none;
  position: absolute;
  bottom: 2vh;
  right: 25px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const TitleWrapper = styled.div`
  height: 15vh;
  width: 50vw;
  padding-top: 1vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  animation: intro 1000ms forwards;
  @keyframes intro {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 1023px) and (orientation: portrait) {
    padding-left: 5vw;
  }
  @media (max-width: 1023px) and (orientation: landscape) {
    justify-content: flex-start;
    padding-top: 0;
  }
`;
const Title = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: 300;
`;
const Subtitle = styled.p`
  color: white;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.75vh 5px;
`;

const HamburgerWrapper = styled.div`
  width: 30px;
  height: 30px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  &:hover {
    cursor: pointer;
  }
`;

const HamburgerBtn = styled.button`
  width: 50px;
  height: 50px;
  padding: 0;
  display: flex;
  background-color: transparent;
  outline: none;
  border: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2.5vh;
  right: 2vh;
`;
const HamburgerLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: white;
  padding: 0;
  margin: 0;
`;

const Hamburger = ({ drawerToggle, openDrawer }) => {
  return (
    <HamburgerBtn onClick={drawerToggle}>
      <HamburgerWrapper
        style={{
          opacity: openDrawer ? "0" : "1",
          transitionDelay: openDrawer ? "0ms" : "300ms",
          zIndex: openDrawer ? "0" : "8",
        }}
      >
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerWrapper>
    </HamburgerBtn>
  );
};

const Header = ({ deleteMsg, filterTodos, clear, dark, darkToggle }) => {
  const [openDrawer, setOpen] = useState(false);

  const drawerToggle = () => {
    setOpen((openDrawer) => !openDrawer);
  };

  return (
    <AppHeader dark={dark} openDrawer={openDrawer}>
      <TitleWrapper>
        <Title>Things</Title>
        <Subtitle>Let's get things done!</Subtitle>
      </TitleWrapper>
      {/* <DarkModeBtn onClick={darkToggle}>
        <Brightness4Icon style={{ color: "white", fontSize: "large" }} />
      </DarkModeBtn> */}
      <Hamburger openDrawer={openDrawer} drawerToggle={drawerToggle} />
      <BtnDrawer
        drawerToggle={drawerToggle}
        show={openDrawer}
        filterTodos={filterTodos}
        clear={clear}
        deleteMsg={deleteMsg}
      />{" "}
      <DateAndTime />
    </AppHeader>
  );
};

export default Header;
