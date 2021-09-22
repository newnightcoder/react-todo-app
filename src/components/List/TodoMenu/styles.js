import styled from "styled-components";

const TodoMenuWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  right: 0;
  background-color: #46529d;
  background-color: rgba(70, 82, 157, 0.9);
  color: white;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  transform: translateY(100%);
  transition: transform 250ms;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(5px);
`;

const MenuItemName = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  border-bottom: 1px solid white;
`;

export { TodoMenuWrapper, MenuItemName, MenuItem };
