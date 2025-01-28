import React from "react";
import styles from "./GenericButton.module.css";

type GenericButtonProps = {
  onClick: () => void;
  text: string;
  className?: string;
};

export default function GenericButton({
  onClick,
  text,
  className,
}: GenericButtonProps) {
  return (
    <button
      className={`${styles.continueButton} ${className || ""}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {text}
    </button>
  );
}
