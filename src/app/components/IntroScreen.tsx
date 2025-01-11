import styles from "./IntroScreen.module.css";
import ContinueButton from "./ContinueButton";

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
    <div className={styles.introScreen}>
      <h1 className={styles.titleText}>{title}</h1>
      <div className={styles.introductionText}>{introduction}</div>
      <ContinueButton onClick={onContinue} text="Continue" />
    </div>
  );
}
