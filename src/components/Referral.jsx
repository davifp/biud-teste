import Image from "next/image";
import { useContext, useEffect } from "react";
import userContext from "../contexts/UserContext";
import stareyes from "../../public/stareyes.png";
import styles from "../styles/referral.module.css";
import Link from "next/link";
import { Button } from "../components/NextButton";

export function Referral({ corp, nextStep }) {
  const { user } = useContext(userContext);

  const buttonProps = {
    style: {
      borderRadius: "2rem",
      color: "var(--white)",
      backgroundColor: "var(--pink)",
      fontSize: "2rem",
      fontWeight: "700",
      padding: "0.8rem",
      display: "flex",
      alignItems: "center",
    },
    value: "Indique um amigo e concorra a um iPhone 13 Pro Max",
    icon: "/iphone.png",
  };

  return (
    <main className={styles.content}>
      <div className={styles.imageContainer}>
        <Image src={stareyes} alt="Star Eyes Emoticon" />
      </div>
      <div>
        <p className={styles.text}>Prontinho, {user.name}! </p>
        <p className={styles.miaText}>
          A experiência MIA que vai fazer sua {corp} decolar começará nos
          próximos minutos em seu WhatsApp.
        </p>
      </div>
      <Button buttonProps={buttonProps} disabled={false} nextStep={nextStep} />
      <Link href="/">
        <button className={styles.button}>Finalizar</button>
      </Link>
    </main>
  );
}
