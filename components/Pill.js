import styles from "./Pill.module.css";

// Figma: the component set "Pill" with the variants Type and State.
// Type becomes a prop that picks a class. State=Hover is handled in CSS, so it is not a prop.
export default function Pill({ type = "primary", onClick, children }) {
  return (
    <button type="button" className={`${styles.pill} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}
