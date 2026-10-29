import styles from "./Pill.module.css";

// Figma: the component set "Pill" with the variants Type and State.
// Type becomes the prop type ("primary" | "secondary"). State=Hover is handled in CSS.
export default function Pill({ children, onClick, type = "primary" }) {
  return (
    <button type="button" className={`${styles.pill} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}
