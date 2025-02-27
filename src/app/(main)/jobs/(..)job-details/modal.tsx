"use client";

import { useRouter } from "next/navigation";
import { type ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const ref = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }

    ref.current = document.getElementById("modal-root")!;
  }, []);

  function onDismiss() {
    router.back();
  }

  return ref.current
    ? createPortal(
        <div className="modal-backdrop">
          <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
            {children}
            <button onClick={onDismiss} className="close-button" />
          </dialog>
        </div>,
        ref.current
      )
    : null;
}
