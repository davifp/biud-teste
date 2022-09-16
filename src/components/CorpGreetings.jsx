import Image from "next/image";
import { useContext, useEffect } from "react";
import rocket from "../../public/rocket.png";
import userContext from "../contexts/UserContext";
import styles from "../styles/corpgreetings.module.css";
import { PulseLoader } from "react-spinners";

export function CorpGreetings({ nextStep, corp }) {
  const { user } = useContext(userContext);

  useEffect(() => {
    setTimeout(() => nextStep(), 5000);
  });

  return (
    <main className={styles.content}>
      <div className={styles.imageContainer}>
        <Image src={rocket} alt="Rocket Icon" />
      </div>
      <div>
        <p className={styles.text}>Legal, {user.name}</p>
        <p className={styles.text1}>
          A partir de agora você vai embarcar nessa experiência comigo e
          descobrir como utilizo a minha inteligência para impactar nos
          resultados da sua {corp}.
        </p>
      </div>
      <PulseLoader size={10} color="#D81656" />
    </main>
  );
}
