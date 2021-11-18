import { makeStyles } from "@mui/styles";
import styled from "styled-components";

const TodoMenuWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  right: 0;
  transition: background-color 500ms;
  background-color: ${({ dark }) =>
    dark ? "rgba(5, 5, 5, 0.9)" : "rgba(70, 82, 157, 0.9)"};
  color: #fefefe;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  opacity: 0;
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

const useStyles = makeStyles({
  root: {
    padding: "10px",
  },
});

export { TodoMenuWrapper, MenuItemName, MenuItem, useStyles };
