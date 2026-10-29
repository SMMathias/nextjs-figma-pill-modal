import styles from "./Pill.module.css";

// Figma: the component set "Pill" with the variants Type, Size and State.
// Type and Size become props that pick a class. State=Hover is handled in CSS, so it is not a prop.
// Other props, fx aria-expanded, go straight to the <button>.
export default function Pill({ type = "primary", size = "md", onClick, children, ...props }) {
  return (
    <button type="button" className={`${styles.pill} ${styles[type]} ${styles[size]}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
