import React, { useState } from "react";
import { BtnGroup, CloseDrawerBtn, DrawerWrapper } from "./styles";

const types = ["show all", "to do", "done", "delete all"];

const HeaderDrawer = ({
  filterTodos,
  clear,
  deleteMsg,
  show,
  drawerToggle,
}) => {
  const [active, setActive] = useState("");

  return (
    <DrawerWrapper>
      <CloseDrawerBtn
        onClick={drawerToggle}
        style={{
          opacity: show ? "1" : "0",
          transitionDelay: show ? "350ms" : "0ms",
        }}
      >
        {/* <HighlightOffIcon /> */}x
      </CloseDrawerBtn>
      <BtnGroup
        style={{
          transform: show ? "translateX(0)" : "translate(100%)",
        }}
        // active={active}
        // filterTodos={filterTodos}
        // clear={clear}
        // show={show}
      >
        {/* <BtnToggle
          active={active === types[0]}
          onClick={() => {
            setActive(types[0]);
            filterTodos("all");
          }}
        >
          {types[0]}
        </BtnToggle>
        <BtnToggle
          active={active === types[1]}
          onClick={() => {
            setActive(types[1]);
            filterTodos("to-do");
          }}
        >
          {types[1]}
        </BtnToggle>
        <BtnToggle
          active={active === types[2]}
          onClick={() => {
            setActive(types[2]);
            filterTodos("done");
          }}
        >
          {types[2]}
        </BtnToggle>
        <BtnToggle
          theme="danger"
          active={active === types[3]}
          onClick={() => {
            clear();
            deleteMsg("delete");
            setActive("");
            setTimeout(() => filterTodos("all"), 2000);
          }}
        >
          {types[3]}
        </BtnToggle> */}
      </BtnGroup>
    </DrawerWrapper>
  );
};

export default HeaderDrawer;
