import styles from "./TransitionScreen.module.css";
import ContinueButton from "./ContinueButton";

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
      <p className={styles.transitionText}>{transitionText}</p>
      <ContinueButton onClick={onContinue} text="Continue" />
    </div>
  );
}
