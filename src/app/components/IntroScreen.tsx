import React from "react";
import styles from "./IntroScreen.module.css";
import ContinueButton from "./ContinueButton";
import P5Background from "./P5Background";

type IntroScreenProps = {
  title: string;
  introduction: string;
  onContinue: () => void;
};

export default function IntroScreen({
  title,
  introduction,
  onContinue,
}: Readonly<IntroScreenProps>) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <P5Background />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.introScreen}>
          <div className={styles.cardBorder}>
            <h1 className={styles.titleText}>{title}</h1>
            <div className={styles.introductionText}>{introduction}</div>
            <div className={styles.continueButtonWrapper}>
              <ContinueButton onClick={onContinue} text="Continue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
