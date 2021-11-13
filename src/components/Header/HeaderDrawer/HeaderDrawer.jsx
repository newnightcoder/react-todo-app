import React, { useState } from "react";
import { BtnGroup, BtnToggle, Drawer, DrawerWrapper } from "./styles";

const types = ["all", "done", "not done", "delete all"];

const HeaderDrawer = ({
  handleTodosToDisplay,
  displayStatusMessage,
  clear,
  deleteMsg,
  openDrawer,
  modalToggle,
  openModal,
  drawerToggle,
}) => {
  const [active, setActive] = useState("all");

  return (
    <DrawerWrapper openDrawer={openDrawer}>
      <Drawer>
        <BtnGroup>
          <BtnToggle
            active={active === types[0]}
            onClick={() => {
              setActive(types[0]);
              handleTodosToDisplay("all");
              displayStatusMessage("all");
            }}
          >
            {types[0]}
          </BtnToggle>
          <BtnToggle
            active={active === types[1]}
            onClick={() => {
              setActive(types[1]);
              handleTodosToDisplay("done");
              displayStatusMessage("done");
            }}
          >
            {types[1]}
          </BtnToggle>
          <BtnToggle
            active={active === types[2]}
            onClick={() => {
              setActive(types[2]);
              handleTodosToDisplay("not done");
              displayStatusMessage("not done");
            }}
          >
            {types[2]}
          </BtnToggle>
          <BtnToggle theme="danger" onClick={modalToggle}>
            {types[3]}
          </BtnToggle>
        </BtnGroup>
      </Drawer>
    </DrawerWrapper>
  );
};

export default HeaderDrawer;
