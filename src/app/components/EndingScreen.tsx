import React from "react";
import styles from "./EndingScreen.module.css";
import ContinueButton from "./ContinueButton";
import P5Background from "./P5Background";

type EndingScreenProps = {
  ending: string;
  onRestart: () => void;
};

export default function EndingScreen({
  ending,
  onRestart,
}: Readonly<EndingScreenProps>) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <P5Background />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.endingScreen}>
          <div className={styles.cardBorder}>
            <div className={styles.endingText}>{ending}</div>
            <div className={styles.continueButtonWrapper}>
              <ContinueButton onClick={onRestart} text="Start Again" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
