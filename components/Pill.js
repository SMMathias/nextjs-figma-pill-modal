import styles from "./Pill.module.css";

// Figma: the component set "Pill". The text becomes children,
// and onClick comes from the component that uses the pill.
export default function Pill({ onClick, children }) {
  return (
    <button type="button" className={styles.pill} onClick={onClick}>
      {children}
    </button>
  );
}
