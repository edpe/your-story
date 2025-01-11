import styles from "./TransitionScreen.module.css";

type TransitionScreenProps = {
  transitionText: string;
  onContinue: () => void;
};

export default function TransitionScreen({
  transitionText,
  onContinue,
}: Readonly<TransitionScreenProps>) {
  return (
    <div className={styles.transitionScreen}>
      <div className={styles.transitionText}>{transitionText}</div>
      <button className={styles.continueButton} onClick={onContinue}>
        Continue
      </button>
    </div>
  );
}
