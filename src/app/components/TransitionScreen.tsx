import React from "react";
import styles from "./TransitionScreen.module.css";
import ContinueButton from "./ContinueButton";
import P5Background from "./P5Background";

type TransitionScreenProps = {
  transitionText: string;
  onContinue: () => void;
};

export default function TransitionScreen({
  transitionText,
  onContinue,
}: Readonly<TransitionScreenProps>) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <P5Background />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.transitionScreen}>
          <p className={styles.transitionText}>{transitionText}</p>
          <div className={styles.continueButtonWrapper}>
            <ContinueButton onClick={onContinue} text="Continue" />
          </div>
        </div>
      </div>
    </div>
  );
}
