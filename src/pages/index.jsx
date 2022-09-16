import Image from "next/image";
import Head from "next/head";

import logo from "../../public/logo.png";
import styles from "../styles/Home.module.css";

import { Button } from "../components/StartButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>BIUD</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.imageContainer}>
            <Image src={logo} layout="intrinsic" alt="BIUD Logo" />
          </div>
          <p className={styles.text}>
            Melhor do que eu escrever um monte de coisa sobre a BIUD, é você
            viver a experiência!
          </p>
          <Button />
        </main>
      </div>
    </>
  );
}
