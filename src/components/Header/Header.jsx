import { Turn as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import HeaderDrawer from "./HeaderDrawer/HeaderDrawer";
import {
  AppHeader,
  HamburgerContainer,
  Subtitle,
  Title,
  TitleWrapper,
} from "./styles";

// const HeaderImg = styled.div`
//   background: url(${img}) no-repeat center/cover;
//   height: 100%;
//   width: 100%;
//   border: 2px solid red;
// `;

const Header = ({
  deleteMsg,
  displayFilteredTodos,
  displayStatusMessage,
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
      <HamburgerContainer>
        <Hamburger
          direction="right"
          toggled={openDrawer}
          toggle={drawerToggle}
          rounded
          hideOutline={true}
          color="#fefefe"
        />
      </HamburgerContainer>
      <HeaderDrawer
        drawerToggle={drawerToggle}
        openDrawer={openDrawer}
        displayFilteredTodos={displayFilteredTodos}
        displayStatusMessage={displayStatusMessage}
        clear={clear}
        deleteMsg={deleteMsg}
      />
      <BottomRow toggleDarkMode={toggleDarkMode} isToggled={isToggled} />
    </AppHeader>
  );
};

export default Header;
