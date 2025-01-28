import React from "react";
import styles from "./HexButton.module.css";

type HexButtonProps = {
  label: string;
  onClick?: () => void;
};

export default function HexButton({ label, onClick }: HexButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles.border}`}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
    >
      {label}
    </button>
  );
}
