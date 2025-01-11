import styles from "./page.module.css";

type LoadingScreenProps = {
  text: string;
};

export default function LoadingScreen({ text }: LoadingScreenProps) {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.rippleLoadingText}>{text}</div>
    </div>
  );
}
