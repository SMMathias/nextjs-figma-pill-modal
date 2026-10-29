"use client";

import { useState } from "react";
import Modal from "./Modal";
import Pill from "./Pill";

// Puts Pill and Modal together (step 1.2): the pill opens the modal, and Esc or a backdrop click closes it.
export default function PillModal({ type, label, title, text, showSeparator }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Pill type={type} onClick={() => setIsOpen(true)}>
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
