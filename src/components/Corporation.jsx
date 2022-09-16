import Image from "next/image";
import suitcase from "../../public/suitcase.png";
import { Button } from "./ChooseButton";
import styles from "../styles/corporation.module.css";

export function Corporation({ nextStep }) {
  const buttonProps = {
    style: {
      borderRadius: "2rem",
      color: "var(--white)",
      backgroundColor: "var(--pink)",
      fontSize: "1.6rem",
      fontWeight: "700",
      marginLeft: "0.8rem",
      padding: "0.8rem",
      display: "flex",
      alignItems: "center",
      gap: "0.8rem",
    },
  };

  const options = [
    { id: 1, name: "Hamburgueria", icon: "/burguer.png" },
    { id: 2, name: "Drogaria", icon: "/pill.png" },
    { id: 3, name: "Loja de Roupas", icon: "/tshirt.png" },
  ];

  return (
    <main className={styles.content}>
      <div className={styles.imageContainer}>
        <Image src={suitcase} alt="Suitcase Icon" />
      </div>
      <p className={styles.text}>
        Vamos supor que você queira otimizar o marketing de uma empresa. Qual
        seria?
      </p>
      <div className={styles.buttoncontainer}>
        {options.map((op) => (
          <Button
            key={op.id}
            nextStep={nextStep}
            name={op.name}
            id={op.id}
            icon={op.icon}
            buttonProps={buttonProps}
          />
        ))}
      </div>
    </main>
  );
}
