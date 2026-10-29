import PillModal from "@/components/PillModal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>Components</h1>
      <div className={styles.pills}>
        <PillModal
          type="primary"
          title="Hick's Law"
          text="Jo flere valgmuligheder, jo længere tid tager det at vælge."
        />
        <PillModal
          type="secondary"
          title="Fitts's Law"
          text="Jo større og tættere et mål er, jo hurtigere er det at ramme."
          showSeparator={false}
        />
      </div>
    </main>
  );
}
