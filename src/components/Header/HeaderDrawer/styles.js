import styled, { css } from "styled-components";

const DrawerWrapper = styled.div`
  width: 35%;
  min-width: 150px;
  height: 100%;
  position: relative;
  @media (max-width: 1023px) and (orientation: landscape) {
  }
`;

const CloseDrawerBtn = styled.button`
  border-radius: 50%;
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  color: white;
  font-size: 1.25rem;
  position: absolute;
  top: 1vh;
  right: 1vh;
  z-index: 100;
  &:hover {
    cursor: pointer;
  }
`;

const BtnGroup = styled.div`
  width: 35%;
  min-width: 150px;
  height: 30vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
  transition: transform 350ms ease-out;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid red;
  @media (min-width: 768px) and (orientation: portrait) {
    width: 20vw;
  }
  @media (max-width: 700px) and (orientation: portrait) {
    width: 120px;
  }
  @media (max-width: 350px) and (orientation: portrait) {
    width: 95px;
  }
`;

const theme = {
  black: {
    default: "rgba(100,100,100,.8)",
    active: "white",
    border: "2.5px solid deepskyblue",
  },
  danger: {
    default: "rgb(255,165,0,.4)",
    active: "orange",
    border: "2px solid white",
  },
};

const Btn = styled.button`
  width: 100%;
  height: 3vh;
  background-color: ${(props) => theme[props.theme].default};
  font-size: 0.75rem;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2.5px solid transparent;
  //   transition: all 200ms ease-in;
  clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0% 100%);
  &:hover {
    cursor: pointer;
    background-color: ${(props) => theme[props.theme].active};
    font-weight: bold;
    color: black;
    border-top: ${(props) => theme[props.theme].active};
    border-right: ${(props) => theme[props.theme].active};
    border-bottom: ${(props) => theme[props.theme].border};
    border-left: ${(props) => theme[props.theme].active};
  }
`;
Btn.defaultProps = { theme: "black" };

const BtnToggle = styled(Btn)`
  ${({ active }) =>
    active &&
    css`
      font-weight: bold;
      color: black;
      background-color: ${(props) => theme[props.theme].active};
      border-top: ${(props) => theme[props.theme].active};
      border-right: ${(props) => theme[props.theme].active};
      border-bottom: ${(props) => theme[props.theme].border};
      border-left: ${(props) => theme[props.theme].active};
    `}
`;

export { DrawerWrapper, CloseDrawerBtn, BtnGroup, Btn, BtnToggle };
