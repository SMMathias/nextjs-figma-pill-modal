"use client";

import { useEffect, useRef } from "react";
import Pill from "./Pill";
import styles from "./Modal.module.css";

// Figma: the component "Modal" with the boolean property showSeparator.
export default function Modal({ isOpen, onClose, origin = { x: 0, y: 0 }, title, text, showSeparator = true }) {
  const dialogRef = useRef(null);

  // The pill's position as CSS custom properties. Modal.module.css starts the animation there.
  const originStyle = { "--origin-x": `${origin.x}px`, "--origin-y": `${origin.y}px` };

  // showModal() gives focus handling, Esc and a backdrop. The open attribute alone does not.
  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  // A click on the backdrop hits the dialog itself. A click on the content hits the elements inside it.
  function handleClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      style={originStyle}
      aria-label={title}
      onClose={onClose}
      onClick={handleClick}
    >
      <div className={styles.content}>
        {showSeparator && <hr className={styles.separator} />}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        {/* Figma: a nested instance of Pill. A close button also helps on touch screens without Esc. */}
        <Pill type="secondary" onClick={onClose}>
          Luk
        </Pill>
      </div>
    </dialog>
  );
}
