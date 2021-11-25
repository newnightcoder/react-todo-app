import styled from "styled-components";
import img from "../../img/header.gif";

const AppHeader = styled.div`
  grid-row: 1;
  height: 25vh;
  min-height: 200px;
  max-height: 300px;
  width: 100%;
  padding-left: 25px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  white-space: nowrap;
  overflow: hidden !important;
  z-index: 50;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
    url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &::after {
    content: "";
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, blueviolet, deepskyblue 60%);
    position: absolute;
    bottom: 0;
    left: 0;
  }
  @media (max-device-height: 500px) and (orientation: landscape) {
    display: none;
  }
  @media (min-width: 768px) {
    width: 400px;
  }
  @media (max-width: 358px) {
    padding-left: 12.5px;
  }
`;

const TitleWrapper = styled.div`
  height: 15vh;
  width: 50vw;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  animation: intro 1000ms forwards;
  z-index: 100;
  @keyframes intro {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: 400;
  text-shadow: 0 0 2px white;
`;

const Subtitle = styled.p`
  color: white;
  font-size: 1rem;
  // font-weight: 00;
  padding: 0.75vh 5px;
  text-shadow: 0 0 1px white;
`;

const HamburgerContainer = styled.div`
  width: 50px;
  height: 40px;
  padding-top: 10px;
  display: flex;
  background-color: transparent;
  outline: none;
  border-width: 0;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 17px;
  right: 10px;
  z-index: 150;
`;

const BottomRowContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 15px;
  padding: 0 17.5px 0 25px;
  @media screen and (max-width: 358px) {
    padding: 0 12.5px 0 20px;
  }
`;

const ToggleContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  height: 22px;
  width: 52.5px;
  position: relative;
  display: block;
  border-radius: 20px;
  background-color: #fefefe;
  border: 1px solid deepskyblue;
  &:hover {
    cursor: pointer;
  }
`;

const Sun = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  left: 1px;
`;

const Moon = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  right: 0;
  bottom: 0.5px;
`;

const ToggleDiv = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid lightgray;
  background-color: deepskyblue;
  transition: transform 300ms;
  transform: ${({ isToggled }) =>
    isToggled ? "translateX(31px)" : "translateX(0px)"};
`;

export {
  AppHeader,
  HamburgerContainer,
  BottomRowContainer,
  Label,
  Sun,
  Moon,
  ToggleContainer,
  ToggleDiv,
  Input,
  Title,
  Subtitle,
  TitleWrapper,
};
