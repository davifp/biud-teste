import { useContext, useEffect } from "react";
import Image from "next/image";
import greetings from "../../public/greetings.png";
import styles from "../styles/greetings.module.css";
import userContext from "../contexts/UserContext";
import { PulseLoader } from "react-spinners";

export function Greetings({ nextStep }) {
  const { user } = useContext(userContext);

  useEffect(() => {
    setTimeout(() => nextStep(), 5000);
  });

  return (
    <main className={styles.content}>
      <div className={styles.imageContainer}>
        <Image src={greetings} alt="Greetings emoticon" />
      </div>
      <div>
        <p className={styles.greetingsnametext}>Prazer, {user.name}</p>
        <p className={styles.greetingstext}>
          Vou te mostrar o meu jeito de fazer marketing direcionado por dados.
        </p>
      </div>
      <PulseLoader size={10} color="#D81656" />
    </main>
  );
}
