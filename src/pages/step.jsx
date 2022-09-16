import { useContext, useState } from "react";
import { Header } from "../components/Header";

import styles from "../styles/step.module.css";
import { Name } from "../components/Name";
import { Greetings } from "../components/Greetings";
import { Phone } from "../components/Phone";
import { CorpGreetings } from "../components/CorpGreetings";
import { Referral } from "../components/Referral";
import { Corporation } from "../components/Corporation";
import userContext from "../contexts/UserContext";

function Step() {
  const [stepCounter, addStepCounter] = useState(0);
  const [corp, setCorp] = useState(undefined);

  const { addUserProgress } = useContext(userContext);

  function nextStep(selectedName) {
    addStepCounter(stepCounter + 1);
    if (selectedName) setCorp(selectedName);
  }

  let progress = 25;

  if ((stepCounter > 2) & (stepCounter < 4)) {
    progress = 50;
  } else if ((stepCounter > 3) & (stepCounter < 5)) {
    progress = 75;
  } else if (stepCounter == 5) {
    progress = 100;
  }

  const steps = {
    0: <Name nextStep={nextStep} />,
    1: <Greetings nextStep={nextStep} />,
    2: <Corporation nextStep={nextStep} />,
    3: <CorpGreetings corp={corp} nextStep={nextStep} />,
    4: <Phone nextStep={nextStep} />,
    5: <Referral corp={corp} nextStep={nextStep} />,
  };

  return (
    <>
      <Header progress={progress} />
      <div className={styles.container}>{steps[stepCounter]}</div>
    </>
  );
}

export default Step;
