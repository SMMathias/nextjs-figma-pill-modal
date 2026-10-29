"use client";

import { useId, useState } from "react";
import { flushSync } from "react-dom";
import Pill from "./Pill";
import styles from "./PillDisclosure.module.css";

// Figma: the variants Closed and Open with "Change to" and Smart Animate.
// The pill opens where it is and makes room. The rest of the page can still be used,
// so it is not a modal: the pill is a button with aria-expanded, and there is no <dialog>.
export default function PillDisclosure({ type, size, label, text, showSeparator = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  // The View Transitions API takes a picture before and after the change and animates between them.
  // flushSync makes React update the page right away, so the "after" picture is correct.
  function handleClick() {
    if (!document.startViewTransition) {
      setIsOpen(!isOpen);
      return;
    }
    document.startViewTransition(() => {
      flushSync(() => setIsOpen(!isOpen));
    });
  }

  // Each element that should animate on its own needs a unique view-transition-name
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ""}`} style={{ viewTransitionName: `item${id}` }}>
      <Pill
        type={type}
        size={size}
        onClick={handleClick}
        aria-expanded={isOpen}
        style={{ viewTransitionName: `pill${id}` }}
      >
        {label}
      </Pill>
      {isOpen && (
        <div className={styles.content}>
          {showSeparator && <hr className={styles.separator} />}
          <p className={styles.text}>{text}</p>
        </div>
      )}
    </div>
  );
}
