import React from "react";
import { Plus } from "react-bootstrap-icons";
import {
  AppFooter,
  Counter,
  CounterBadge,
  CounterWrapper,
  PlusBtn,
} from "./styles";

const Footer = ({ todos, toggleFormDrawer, dark }) => {
  const todosDone = todos.filter((todo) => todo.done).length;
  const error = "";

  return (
    <AppFooter>
      {todos.length !== 0 && (
        <CounterWrapper>
          <Counter>
            total things <CounterBadge>{todos.length}</CounterBadge>
          </Counter>
          <Counter>
            done
            <CounterBadge>{todosDone}</CounterBadge>
          </Counter>
        </CounterWrapper>
      )}
      <PlusBtn dark={dark} onClick={() => toggleFormDrawer(error)}>
        <Plus style={{ pointerEvents: "none" }} />
      </PlusBtn>{" "}
    </AppFooter>
  );
};

export default Footer;

/* <Mention>
  Built with React by Nightcoder{" "}
  <span role="img" aria-label="sunglasses emoji">
    😎{" "}
  </span>
</Mention> */
