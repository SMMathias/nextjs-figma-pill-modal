import styles from "./Pill.module.css";

// Figma: the component set "Pill" with the variants Type and State.
// Type -> the type prop (step 1.4). State=Hover -> :hover in the CSS, not a prop.
export default function Pill({ type = "primary", onClick, children }) {
  return (
    <button type="button" className={`${styles.pill} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}
