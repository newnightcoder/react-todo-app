import styled from "styled-components";
import img from "../../img/giphy.gif";

const AppHeader = styled.div`
  grid-row: 1;
  height: 25vh;
  max-height: 350px;
  width: 400px;
  padding-left: 1.75vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  white-space: nowrap;
  overflow: hidden !important;
  z-index: 50;
  background: deepskyblue;
  background: linear-gradient(rgba(50, 50, 50, 0.7), rgba(50, 50, 50, 0.7)),
    url(${img}) no-repeat center/cover;
  &::after {
    content: "";
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, blueviolet, deepskyblue 60%);
    position: absolute;
    bottom: 0;
    left: 0;
  }
  @media (max-width: 996px) {
    width: 100%;
    &::after {
      width: 100vw;
    }
  }
  // @media (max-width: 1023px) and (orientation: landscape) {
  //   width: 100%;
  //   padding: 0 0 0 1vw;
  //   &::after {
  //     display: none;
  //   }
  // }
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
  z-index: 100;
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
  font-weight: 400;
`;
const Subtitle = styled.p`
  color: white;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.75vh 5px;
`;

export { AppHeader, DarkModeBtn, Title, Subtitle, TitleWrapper };
