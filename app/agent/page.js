import PillModal from "@/components/agent/PillModal";
import styles from "../page.module.css";

// Round 2: the components the agent built from Figma through the MCP server.
export default function AgentPage() {
  return (
    <main className={styles.page}>
      <h1>Components (agent)</h1>
      <div className={styles.pills}>
        <PillModal
          type="primary"
          label="Primary"
          title="Hick's Law"
          text="Jo flere valgmuligheder, jo længere tid tager det at vælge."
          showSeparator={true}
        />
        <PillModal
          type="secondary"
          label="Secondary"
          title="Hick's Law"
          text="Jo flere valgmuligheder, jo længere tid tager det at vælge."
          showSeparator={false}
        />
      </div>
    </main>
  );
}
