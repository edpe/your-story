import React from "react";
import styles from "./EndingScreen.module.css";
import P5Background from "./P5Background";
import { FaArrowLeft } from "react-icons/fa";
import GenericButton from "./Button";
type EndingScreenProps = {
  ending: string;
  onRestart: () => void;
  onPrevious: () => void;
};

export default function EndingScreen({
  ending,
  onRestart,
  onPrevious,
}: Readonly<EndingScreenProps>) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <P5Background />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.endingScreen}>
          <div className={styles.cardBorder}>
            <div className={styles.cardBorderContent}>
              <div className={styles.endingText}>{ending}</div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <FaArrowLeft
            className={styles.navigationArrowLeft}
            onClick={onPrevious}
          />
          <GenericButton onClick={onRestart} text="Restart" />
        </div>
      </div>
    </div>
  );
}
