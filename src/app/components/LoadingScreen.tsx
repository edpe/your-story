import styles from "./LoadingScreen.module.css";

type LoadingScreenProps = {
  text: string;
  type: "title" | "transition";
};

export default function LoadingScreen({
  text,
  type,
}: Readonly<LoadingScreenProps>) {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.backgroundImage}></div>
      {type === "title" ? (
        <h1 className={styles.rippleTitleText}>{text}</h1>
      ) : (
        <div className={styles.transitionTextContainer}>
          <p className={styles.transitionText}>{text}</p>
        </div>
      )}
    </div>
  );
}
