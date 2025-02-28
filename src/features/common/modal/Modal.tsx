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
        className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[100]"
        onClick={onClose}
      />
      <div className="fixed top-[20%] left-[50%] translate-x-[-50%] w-[65%] h-[60%] bg-white p-10 rounded-lg z-[101] overflow-y-scroll">
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
