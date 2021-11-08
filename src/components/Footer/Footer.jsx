import React from "react";
import { Plus } from "react-bootstrap-icons";
import {
  AppFooter,
  Counter,
  CounterWrapper,
  PlusBtn,
  ProgressBar,
} from "./styles";

const Footer = ({ todos, toggleFormDrawer, dark }) => {
  const todosDone = todos.filter((todo) => todo.done).length;
  const error = "";

  return (
    <AppFooter dark={dark}>
      <CounterWrapper>
        <Counter>
          <ProgressBar
            style={{
              transform:
                todos.length !== 0
                  ? `scaleX(${100 - (todosDone / todos.length) * 100}%)`
                  : "scaleX(1)",
            }}
          />
        </Counter>
        <span>
          {todos.length !== 0
            ? Math.round((todosDone / todos.length) * 1000) / 10
            : 0}
          % completed
        </span>
      </CounterWrapper>
      <PlusBtn dark={dark} onClick={() => toggleFormDrawer(error)}>
        <Plus style={{ pointerEvents: "none" }} />
      </PlusBtn>
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
