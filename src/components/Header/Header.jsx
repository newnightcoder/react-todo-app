import React, { useState } from "react";
import DateAndTime from "./DateTime/DateAndTime";
import Hamburger from "./Hamburger/Hamburger";
import HeaderDrawer from "./HeaderDrawer/HeaderDrawer";
import { AppHeader, Subtitle, Title, TitleWrapper } from "./styles";

// const HeaderImg = styled.div`
//   background: url(${img}) no-repeat center/cover;
//   height: 100%;
//   width: 100%;
//   border: 2px solid red;
// `;

const Header = ({
  deleteMsg,
  displayFilteredTodos,
  clear,
  dark,
  darkToggle,
}) => {
  const [openDrawer, setOpen] = useState(false);

  const drawerToggle = () => {
    setOpen((openDrawer) => !openDrawer);
  };

  return (
    <AppHeader dark={dark} openDrawer={openDrawer}>
      <TitleWrapper>
        <Title>Things</Title>
        <Subtitle>Let's get things done!</Subtitle>
      </TitleWrapper>
      {/* <DarkModeBtn onClick={darkToggle}>
        <Brightness4Icon style={{ color: "white", fontSize: "large" }} />
      </DarkModeBtn> */}
      <Hamburger openDrawer={openDrawer} drawerToggle={drawerToggle} />
      <HeaderDrawer
        drawerToggle={drawerToggle}
        openDrawer={openDrawer}
        displayFilteredTodos={displayFilteredTodos}
        clear={clear}
        deleteMsg={deleteMsg}
      />{" "}
      <DateAndTime />
    </AppHeader>
  );
};

export default Header;
