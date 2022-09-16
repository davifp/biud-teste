import Image from "next/image";
import handwave from "../../public/handwave.png";
import { Button } from "./NextButton";
import styles from "../styles/name.module.css";
import { useContext } from "react";
import userContext from "../contexts/UserContext";

export function Name({ nextStep }) {
  const buttonProps = {
    style: {
      borderRadius: "2rem",
      color: "#FFFFFF",
      backgroundColor: "#d81656",
      fontSize: "1.6rem",
      fontWeight: "700",
      padding: "0.8rem",
    },
    value: "Avançar",
  };

  const { addUserName, user } = useContext(userContext);

  function handleInput(e) {
    addUserName(e.target.value);
  }

  return (
    <main className={styles.content}>
      <div className={styles.imageContainer}>
        <Image src={handwave} alt="Hand wave emoticon" />
      </div>
      <p className={styles.text}>Como voce quer ser chamado?</p>
      <input
        className={styles.input}
        onChange={handleInput}
        type="text"
        placeholder="Escreva seu nome"
      />
      <Button
        buttonProps={buttonProps}
        disabled={user.name.length < 3}
        nextStep={nextStep}
      />
    </main>
  );
}
