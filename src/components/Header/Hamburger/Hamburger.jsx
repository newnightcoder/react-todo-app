import React from "react";
import { HamburgerBtn, HamburgerLine, HamburgerWrapper } from "./styles";

const Hamburger = ({ drawerToggle, openDrawer }) => {
  return (
    <HamburgerBtn onClick={drawerToggle}>
      <HamburgerWrapper
        style={{
          opacity: openDrawer ? "0" : "1",
          transitionDelay: openDrawer ? "0ms" : "300ms",
          zIndex: openDrawer ? "0" : "8",
        }}
      >
        <HamburgerLine />
        <HamburgerLine style={{ width: "80%" }} />
        <HamburgerLine />
      </HamburgerWrapper>
    </HamburgerBtn>
  );
};

export default Hamburger;
