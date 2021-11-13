import { Turn as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import DeleteModal from "./DeleteModal/DeleteModal";
import HeaderDrawer from "./HeaderDrawer/HeaderDrawer";
import {
  AppHeader,
  HamburgerContainer,
  Subtitle,
  Title,
  TitleWrapper,
} from "./styles";

const Header = ({
  handleTodosToDisplay,
  displayStatusMessage,
  clear,
  dark,
  toggleDarkMode,
  isToggled,
  todos,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const drawerToggle = () => {
    setOpenDrawer((openDrawer) => !openDrawer);
  };

  const modalToggle = () => {
    setOpenModal((openModal) => !openModal);
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
        modalToggle={modalToggle}
        openDrawer={openDrawer}
        openModal={openModal}
        handleTodosToDisplay={handleTodosToDisplay}
        displayStatusMessage={displayStatusMessage}
      />
      {todos.length !== 0 && (
        <DeleteModal
          openModal={openModal}
          modalToggle={modalToggle}
          drawerToggle={drawerToggle}
          clear={clear}
          handleTodosToDisplay={handleTodosToDisplay}
        />
      )}
      <BottomRow toggleDarkMode={toggleDarkMode} isToggled={isToggled} />
    </AppHeader>
  );
};

export default Header;
