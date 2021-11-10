import styled, { css } from "styled-components";

const flexColumn = `display: flex;
flex-direction: column;
justify-content: center;
align-items: center`;

const DrawerWrapper = styled.div`
  width: 150px;
  height: 100%;
  position: relative;
  @media (min-width: 768px) {
    width: 220px;
  }
  @media (min-width: 1024px) {
    width: 150px;
  }
  @media (max-width: 350px) {
    width: 120px;
  }
`;

const Drawer = styled.div`
  ${flexColumn};
  width: 150px;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  transform: translateX(100%);
  transition: transform 350ms ease-out;
  @media (min-width: 768px) {
    width: 220px;
  }
  @media (min-width: 1024px) {
    width: 150px;
  }
  @media (max-width: 350px) {
    width: 120px;
  }
`;

const BtnGroup = styled.div`
  width: 150px;
  height: 60%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-left: 1px solid rgba(10, 10, 10, 0.25);
  @media (min-width: 768px) {
    width: 220px;
  }
  @media (min-width: 1024px) {
    width: 150px;
  }
  @media (max-width: 350px) {
    width: 120px;
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
  width: 90%;
  height: 25px;
  background-color: ${(props) => theme[props.theme].default};
  font-size: 0.75rem;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2.5px solid transparent;
  border-radius: 10px;
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

export { DrawerWrapper, Drawer, BtnGroup, Btn, BtnToggle };
