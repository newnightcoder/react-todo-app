import styled from "styled-components";

const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 500ms;
  background-color: ${({ dark }) =>
    dark ? "#222" : "#d6e9f8"}; //moondust silver
  @media (max-width: 1023px) and (orientation: portrait) {
    background-color: transparent;
  }
`;

const Container = styled.div`
  height: 96%;
  max-height: 800px;
  width: 400px;
  display: grid;
  grid-template-rows: max-content 1fr 75px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  position: relative;
  margin: 0;
  overflow: hidden;
  @media (max-width: 996px) {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 100%;
    max-height: none;
  }
`;

export { AppWrapper, Container };
