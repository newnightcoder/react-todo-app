import React from "react";
import { Btn } from "../HeaderDrawer/styles";
import { ModalContainer, ModalContent } from "./styles";

const DeleteModal = ({
  modalToggle,
  drawerToggle,
  openModal,
  clear,
  handleTodosToDisplay,
}) => {
  return (
    <ModalContainer openModal={openModal}>
      <ModalContent>
        <span style={{ textAlign: "center" }}>
          Your list will be permanently deleted.
        </span>
        <span style={{ fontWeight: "500", marginTop: "2px" }}>Continue?</span>
        <Btn
          onClick={() => {
            clear();
            setTimeout(() => {
              drawerToggle();
              modalToggle();
            }, 250);
          }}
        >
          Yes
        </Btn>
        <Btn onClick={modalToggle}>Cancel</Btn>
      </ModalContent>
    </ModalContainer>
  );
};

export default DeleteModal;
