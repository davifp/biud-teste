import Head from "next/head";
import styles from "../styles/header.module.css";

export function Header({ progress }) {
  return (
    <>
      <Head>
        <title>BIUD</title>
      </Head>
      <header className={styles.header}>
        <div style={{ width: `${progress}%` }} className={styles.progressBar}>
          {" "}
        </div>
      </header>
    </>
  );
}
