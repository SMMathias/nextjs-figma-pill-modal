"use client";

import { useState } from "react";
import Modal from "./Modal";
import Pill from "./Pill";

// Figma: the prototype interaction on the pill – On click -> Open overlay "Modal".
export default function PillModal({ title, text, type, showSeparator }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Pill type={type} onClick={() => setIsOpen(true)}>
        {title}
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
