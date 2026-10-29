import Modal from "@/components/Modal";
import Pill from "@/components/Pill";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>Components</h1>
      <div className={styles.pills}>
        <Pill>Primary</Pill>
      </div>
      {/* Add isOpen to see the modal right away. In step 1.2, PillModal opens it. */}
      <Modal title="Hick's Law" text="Jo flere valgmuligheder, jo længere tid tager det at vælge." />
    </main>
  );
}
