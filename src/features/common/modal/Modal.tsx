"use client";

import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        className="fixed w-full bg-black opacity-40 z-[100]"
        onClick={onClose} // Close the modal if the background is clicked
      />
      <div className="fixed top-1/4 left-[50%] translate-x-[-50%] bg-white p-6 rounded-lg z-[101]">
        <button onClick={onClose} className="absolute top-2 right-2">
          Close
        </button>
        {children}
      </div>
    </>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
