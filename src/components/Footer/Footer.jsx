import React from "react";
import { Plus } from "react-bootstrap-icons";
import {
  AppFooter,
  Counter,
  CounterText,
  CounterWrapper,
  Number,
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
                  ? `scale(${1 - todosDone / todos.length}, 1)`
                  : "scale(0, 1)",
            }}
          />
        </Counter>
        <CounterText dark={dark}>
          <Number>
            {todos.length !== 0
              ? Math.floor((todosDone / todos.length) * 100)
              : 0}
          </Number>
          % completed
        </CounterText>
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
