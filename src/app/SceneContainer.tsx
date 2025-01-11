import Image from "next/image";
import styles from "./page.module.css";
import { Scene } from "./page";
import { sceneReadings } from "./storyContent";

type SceneContainerProps = {
  scenes: Scene[];
  currentSceneIndex: number;
  revealedScenes: { [key: number]: boolean };
  showReading: { [key: number]: boolean };
  selectedReadings: { [key: number]: string };
  handleRevealReading: (index: number, reading: string) => void;
  handleToggleReading: (index: number) => void;
  handleContinue: () => void;
  ending: string;
};

function toCamelCase(str: string) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

export default function SceneContainer({
  scenes,
  currentSceneIndex,
  revealedScenes,
  showReading,
  selectedReadings,
  handleRevealReading,
  handleToggleReading,
  handleContinue,
  ending,
}: SceneContainerProps) {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;

  return (
    <>
      <div className={styles.imageContainer}>
        {scenes.map((scene, index) => {
          if (index !== currentSceneIndex) return null;

          const readingKey = toCamelCase(
            scene.alt.toLowerCase().replace(/ /g, "-")
          ) as keyof typeof sceneReadings;
          const randomReading =
            sceneReadings[readingKey] &&
            sceneReadings[readingKey][
              Math.floor(Math.random() * sceneReadings[readingKey].length)
            ];

          return (
            <div key={scene.alt} className={styles.scene}>
              <div className={styles.vignetteGradient}>
                {!revealedScenes[index] ? (
                  <>
                    <Image
                      src={isMobile ? scene.mobileSrc || scene.src : scene.src}
                      alt={scene.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                      className={styles.imageWithMargin}
                      layout="responsive"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div
                      className={
                        index % 2 === 0
                          ? styles.overlayTextLeft
                          : styles.overlayTextRight
                      }
                    >
                      <div>{scene.texts[index % scene.texts.length]}</div>
                    </div>
                    <button
                      className={styles.revealButton}
                      onClick={() => handleRevealReading(index, randomReading)}
                    >
                      Receive your reading
                    </button>
                  </>
                ) : (
                  <div
                    className={styles.readingReveal}
                    onClick={() => handleToggleReading(index)}
                    style={{ height: "100%" }}
                  >
                    {showReading[index] ? (
                      <div className={styles.readingFrame}>
                        {selectedReadings[index]}
                      </div>
                    ) : (
                      <>
                        <Image
                          src={
                            isMobile ? scene.mobileSrc || scene.src : scene.src
                          }
                          alt={scene.alt}
                          width={800}
                          height={600}
                          loading="lazy"
                          className={styles.imageWithMargin}
                          layout="responsive"
                          style={{ width: "100%", height: "auto" }}
                        />
                        <div
                          className={
                            index % 2 === 0
                              ? styles.overlayTextLeft
                              : styles.overlayTextRight
                          }
                        >
                          <div>{scene.texts[index % scene.texts.length]}</div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {currentSceneIndex < scenes.length - 1 && (
        <button className={styles.continueButton} onClick={handleContinue}>
          Continue
        </button>
      )}

      {currentSceneIndex === scenes.length - 1 && (
        <div className={styles.ending}>{ending}</div>
      )}
    </>
  );
}
