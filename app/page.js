import PillDisclosure from "@/components/PillDisclosure";
import PillModal from "@/components/PillModal";
import styles from "./page.module.css";

// One object per pill. Each PillModal has its own state, so each pill opens its own modal.
const laws = [
  {
    title: "Hick's Law",
    text: "Jo flere valgmuligheder, jo længere tid tager det at vælge.",
    type: "primary"
  },
  {
    title: "Fitts's Law",
    text: "Jo større og tættere et mål er, jo hurtigere er det at ramme.",
    type: "secondary",
    showSeparator: false
  },
  {
    title: "Jakob's Law",
    text: "Brugerne forventer, at dit site virker som de sites, de allerede kender.",
    type: "primary"
  },
  {
    title: "Miller's Law",
    text: "Vi kan kun holde omkring 7 (± 2) ting i arbejdshukommelsen ad gangen.",
    type: "secondary",
    size: "sm"
  },
  {
    title: "RACE'S Law",
    text: "Giv den hele armen, men gør det på en måde, der ikke forvirrer brugeren.",
    type: "primary"
  }
];

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>Components</h1>
      <h2>Som modal</h2>
      <div className={styles.pills}>
        {laws.map((law) => (
          <PillModal
            key={law.title}
            type={law.type}
            size={law.size}
            label={law.title}
            title={law.title}
            text={law.text}
            showSeparator={law.showSeparator}
          />
        ))}
      </div>
      {/* Extra 3b: the same pills, but they open where they are and make room */}
      <h2>På stedet</h2>
      <div className={styles.pills}>
        {laws.map((law) => (
          <PillDisclosure
            key={law.title}
            type={law.type}
            size={law.size}
            label={law.title}
            text={law.text}
            showSeparator={law.showSeparator}
          />
        ))}
      </div>
    </main>
  );
}
