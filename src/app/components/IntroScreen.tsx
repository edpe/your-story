import styles from "./IntroScreen.module.css";

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
      <button className={styles.continueButton} onClick={onContinue}>
        Continue
      </button>
    </div>
  );
}
