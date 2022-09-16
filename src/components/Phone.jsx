import Image from "next/image";
import { IMask, useIMask } from "react-imask";
import { Button } from "../components/NextButton";
import phone from "../../public/phone.png";
import styles from "../styles/phone.module.css";
import { useContext, useState } from "react";
import userContext from "../contexts/UserContext";

export function Phone({ nextStep }) {
  const buttonProps = {
    style: {
      borderRadius: "2rem",
      color: "var(--white)",
      backgroundColor: "var(--pink)",
      fontSize: "1.6rem",
      fontWeight: "700",
      padding: "0.8rem",
    },
    value: "Avançar",
  };

  const phoneMask = IMask.createMask({
    mask: "(00) 00000-0000",
  });

  const { addUserPhone, user } = useContext(userContext);

  const { ref, unmaskedValue } = useIMask(phoneMask, {
    onComplete: (value, maskRef) => addUserPhone(unmaskedValue),
  });

  return (
    <main className={styles.content}>
      <div className={styles.imageContainer}>
        <Image src={phone} alt="Phone Icon" />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.phoneText}>
          {" "}
          Essa experiência acontece toda pelo WhatsApp. Por isso, me diz qual o
          número do seu celular?
        </p>
        <p className={styles.phoneText1}>
          Não se preocupe! Seu número será utilizado exclusivamente para que eu
          demonstre a experiência MIA
        </p>
      </div>
      <input
        className={styles.phoneInput}
        type="text"
        ref={ref}
        placeholder="Escreva seu WhatsApp"
      />
      <Button
        nextStep={nextStep}
        disabled={!(unmaskedValue.length == 11)}
        buttonProps={buttonProps}
      />
    </main>
  );
}
