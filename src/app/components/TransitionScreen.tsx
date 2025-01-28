import React from "react";
import styles from "./TransitionScreen.module.css";
import P5Background from "./P5Background";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type TransitionScreenProps = {
  transitionText: string;
  onContinue: () => void;
  onPrevious: () => void;
  showPrevious: boolean;
  showNext: boolean;
};

export default function TransitionScreen({
  transitionText,
  onContinue,
  onPrevious,
  showPrevious,
  showNext,
}: Readonly<TransitionScreenProps>) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <P5Background />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          className={styles.transitionScreen}
          style={{ width: "50%", margin: "0 auto" }}
        >
          <p className={styles.transitionText}>{transitionText}</p>
        </div>
        {showPrevious && (
          <FaArrowLeft
            className={styles.navigationArrowLeft}
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={onPrevious}
          />
        )}
        {showNext && (
          <FaArrowRight
            className={styles.navigationArrowRight}
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={onContinue}
          />
        )}
      </div>
    </div>
  );
}
