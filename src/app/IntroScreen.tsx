import styles from "./page.module.css";

type IntroScreenProps = {
  title: string;
  introduction: string;
  onContinue: () => void;
};

export default function IntroScreen({
  title,
  introduction,
  onContinue,
}: IntroScreenProps) {
  return (
    <div className={styles.introScreen}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.introduction}>{introduction}</div>
      <button className={styles.continueButton} onClick={onContinue}>
        Continue
      </button>
    </div>
  );
}
