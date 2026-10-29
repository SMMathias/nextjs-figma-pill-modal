"use client";

import { useState } from "react";
import Modal from "./Modal";
import Pill from "./Pill";

// Figma: the prototype interaction. PillModal puts Pill and Modal together,
// and its state remembers if the modal is open.
export default function PillModal({ type, size, label, title, text, showSeparator }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Pill type={type} size={size} onClick={() => setIsOpen(true)}>
        {label}
      </Pill>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        text={text}
        showSeparator={showSeparator}
      />
    </>
  );
}
