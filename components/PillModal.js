"use client";

import { useState } from "react";
import Modal from "./Modal";
import Pill from "./Pill";

// Figma: the prototype interaction. PillModal puts Pill and Modal together,
// and its state remembers if the modal is open.
export default function PillModal({ type, size, label, title, text, showSeparator }) {
  const [isOpen, setIsOpen] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  // The modal opens in the middle of the screen. Measure how far the pill is from there,
  // so the modal can unfold from the pill.
  function handleOpen(event) {
    const pill = event.currentTarget.getBoundingClientRect();
    setOrigin({
      x: pill.left + pill.width / 2 - window.innerWidth / 2,
      y: pill.top + pill.height / 2 - window.innerHeight / 2
    });
    setIsOpen(true);
  }

  return (
    <>
      <Pill type={type} size={size} onClick={handleOpen}>
        {label}
      </Pill>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        origin={origin}
        title={title}
        text={text}
        showSeparator={showSeparator}
      />
    </>
  );
}
