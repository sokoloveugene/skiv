import React from "react";
import { useOutsideAction } from "hooks/useClickOutside";
import { useFreezeScroll } from "hooks/useFreezeScroll";
import { ReactComponent as Close } from "assets/icons/Close.svg";
import * as s from "./Modal.styled";

interface ModalI {
  onClose: () => void;
  clickOutside?: boolean;
}

const emptyFn = () => null;

const Modal: React.FC<ModalI> = ({
  children,
  onClose,
  clickOutside = true,
}) => {
  useFreezeScroll();
  const [contentRef] = useOutsideAction(clickOutside ? onClose : emptyFn);

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
