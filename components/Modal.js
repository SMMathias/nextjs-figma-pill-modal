"use client";

import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

// Figma: the component "Modal".
// Open it with showModal() (step 1.1), and style it with your tokens (step 1.3).
export default function Modal({ isOpen, onClose, title, text, showSeparator = true }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  // The padding sits on the inner <div>, so a click straight on the <dialog> is a click on the backdrop
  function handleClick(event) {
    if (event.target === dialogRef.current) onClose();
  }

  return (
    <dialog ref={dialogRef} className={styles.modal} onClose={onClose} onClick={handleClick}>
      <div className={styles.content}>
        {showSeparator && <div className={styles.separator} />}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </dialog>
  );
}
