import React, { useState } from "react";
import BottomRow from "./BottomRow";
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
  toggleDarkMode,
  isToggled,
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
      <Hamburger openDrawer={openDrawer} drawerToggle={drawerToggle} />
      <HeaderDrawer
        drawerToggle={drawerToggle}
        openDrawer={openDrawer}
        displayFilteredTodos={displayFilteredTodos}
        clear={clear}
        deleteMsg={deleteMsg}
      />
      <BottomRow toggleDarkMode={toggleDarkMode} isToggled={isToggled} />
    </AppHeader>
  );
};

export default Header;
