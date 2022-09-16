import Link from "next/link";
import styles from "../styles/button.module.css";

export function Button() {
  function handleStartButton() {}

  return (
    <Link href="/step">
      <button onClick={() => handleStartButton()} className={styles.button}>
        Começar
      </button>
    </Link>
  );
}
