import React from "react";
import styles from "./ContinueButton.module.css";

type ContinueButtonProps = {
  onClick: () => void;
  text: string;
};

export default function ContinueButton({ onClick, text }: ContinueButtonProps) {
  return (
    <button
      className={styles.continueButton}
      onClick={(e) => {
        e.preventDefault(); // Prevent default behavior
        onClick(); // Call the passed onClick function
      }}
    >
      {text}
    </button>
  );
}
