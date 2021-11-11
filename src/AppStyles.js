import styled from "styled-components";

const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  min-width: 330px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 500ms;
  background-color: ${({ dark }) =>
    dark ? "#222" : "#d6e9f8"}; //moondust silver
`;

const Container = styled.div`
  height: 100%;
  width: 100vw;
  min-width: 330px;
  position: fixed;
  bottom: 0;
  max-height: none;
  display: grid;
  grid-template-rows: max-content 1fr 75px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  margin: 0;
  overflow: hidden;
  @media (min-width: 1024px) {
    height: 94%;
    width: 400px;
    max-height: 800px;
    position: relative;
  }
`;

export { AppWrapper, Container };
