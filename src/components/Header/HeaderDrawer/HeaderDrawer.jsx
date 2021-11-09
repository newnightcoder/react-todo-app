import React, { useState } from "react";
import { BtnGroup, BtnToggle, DrawerWrapper } from "./styles";

const types = ["all", "done", "not done", "delete all"];

const HeaderDrawer = ({
  displayFilteredTodos,
  clear,
  deleteMsg,
  openDrawer,
  drawerToggle,
}) => {
  const [active, setActive] = useState("all");

  return (
    <DrawerWrapper>
      <BtnGroup
        style={{
          transform: openDrawer ? "translateX(0)" : "translate(100%)",
        }}
      >
        <BtnToggle
          active={active === types[0]}
          onClick={() => {
            setActive(types[0]);
            displayFilteredTodos("all");
          }}
        >
          {types[0]}
        </BtnToggle>
        <BtnToggle
          active={active === types[1]}
          onClick={() => {
            setActive(types[1]);
            displayFilteredTodos("done");
          }}
        >
          {types[1]}
        </BtnToggle>
        <BtnToggle
          active={active === types[2]}
          onClick={() => {
            setActive(types[2]);
            displayFilteredTodos("not done");
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
            setTimeout(() => displayFilteredTodos("all"), 2000);
          }}
        >
          {types[3]}
        </BtnToggle>
      </BtnGroup>
    </DrawerWrapper>
  );
};

export default HeaderDrawer;
