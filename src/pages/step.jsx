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

  return (
    <>
      <Header progress={progress} />
      <div className={styles.container}>
        {(() => {
          switch (stepCounter) {
            case 0:
              return <Name nextStep={nextStep} />;
            case 1:
              return <Greetings nextStep={nextStep} />;
            case 2:
              return <Corporation nextStep={nextStep} />;
            case 3:
              return <CorpGreetings corp={corp} nextStep={nextStep} />;
            case 4:
              return <Phone nextStep={nextStep} />;
            case 5:
              return <Referral corp={corp} nextStep={nextStep} />;
            default:
              break;
          }
        })()}
      </div>
    </>
  );
}

export default Step;
