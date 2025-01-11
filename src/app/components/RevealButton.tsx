import styles from "./RevealButton.module.css";

type RevealButtonProps = {
  index: number;
  randomReading: string;
  handleRevealReading: (index: number, reading: string) => void;
};

export default function RevealButton({
  index,
  randomReading,
  handleRevealReading,
}: Readonly<RevealButtonProps>) {
  return (
    <button
      className={styles.revealButton}
      onClick={() => handleRevealReading(index, randomReading)}
    >
      Receive your reading
    </button>
  );
}
