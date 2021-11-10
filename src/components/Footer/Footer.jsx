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
                  ? `scaleX(${100 - (todosDone / todos.length) * 100}%)`
                  : "scaleX(1)",
            }}
          />
        </Counter>
        <CounterText>
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
