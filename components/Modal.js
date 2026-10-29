"use client";

import { useEffect, useId, useRef } from "react";
import styles from "./Modal.module.css";

// Figma: the component "Modal" with the property Show separator.
// A <dialog> opened with showModal(), so it gets a backdrop, Escape to close and focus handling for free.
export default function Modal({ isOpen, onClose, title, text, showSeparator = true }) {
  const dialogRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  // Figma: "Close when clicking outside". A click on the backdrop lands on the <dialog> but outside its box.
  function handleClick(event) {
    const rect = dialogRef.current.getBoundingClientRect();
    const isInside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    if (!isInside) dialogRef.current.close();
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={handleClick}>
      {showSeparator && <div className={styles.separator} />}
      <h2 id={titleId} className={styles.title}>
        {title}
      </h2>
      <p className={styles.text}>{text}</p>
    </dialog>
  );
}
