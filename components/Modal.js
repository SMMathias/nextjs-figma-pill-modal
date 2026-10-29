"use client";

import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

// Figma: the component "Modal".
export default function Modal({ isOpen, onClose, title, text }) {
  const dialogRef = useRef(null);

  // showModal() gives focus handling, Esc and a backdrop. The open attribute alone does not.
  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} className={styles.modal} aria-label={title} onClose={onClose}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </dialog>
  );
}
