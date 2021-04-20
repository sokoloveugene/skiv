import React from "react";
import useOutsideAction from "hooks/useClickOutside";
import { ReactComponent as Close } from "assets/icons/Close.svg";
import * as s from "./Modal.styled";

interface ModalI {
  onClose: () => void;
}

const Modal: React.FC<ModalI> = ({ children, onClose }) => {
  const [contentRef] = useOutsideAction(onClose);

  return (
    <s.BackDrop>
      <s.Container ref={contentRef}>
        <s.CloseButton role="button" onClick={onClose}>
          <Close />
        </s.CloseButton>
        {children}
      </s.Container>
    </s.BackDrop>
  );
};

export default Modal;
