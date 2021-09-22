import React from "react";
import { AppFooter, Counter, CounterBadge, CounterWrapper } from "./styles";

const Footer = ({ todos, dark }) => {
  const todosDone = todos.filter((todo) => todo.done).length;

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
      {/* <Mention>
      Built with React by Nightcoder{" "}
      <span role="img" aria-label="sunglasses emoji">
        😎{" "}
      </span>
    </Mention> */}
    </AppFooter>
  );
};

export default Footer;
