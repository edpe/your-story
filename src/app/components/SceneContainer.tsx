import Image from "next/image";
import styles from "./SceneContainer.module.css";
import { Scene } from "../page";
import { sceneReadings } from "../data/storyContent";
import ContinueButton from "./ContinueButton";
import RevealButton from "./RevealButton";
import React from "react";
import P5Background from "./P5Background";

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

const getRandomReading = (alt: string) => {
  const readingKey = toCamelCase(
    alt.toLowerCase().replace(/ /g, "-")
  ) as keyof typeof sceneReadings;
  const readings = sceneReadings[readingKey];
  return readings ? readings[Math.floor(Math.random() * readings.length)] : "";
};

const SceneImage = ({
  scene,
  isMobile,
  text,
}: {
  scene: Scene;
  isMobile: boolean;
  text: string;
}) => (
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
    <div className={text ? styles.overlayTextLeft : styles.overlayTextRight}>
      <div>{text}</div>
    </div>
  </>
);

const SceneView = ({
  scene,
  index,
  revealedScenes,
  showReading,
  selectedReadings,
  handleRevealReading,
  isMobile,
  handleToggleReading,
  handleContinue,
}: {
  scene: Scene;
  index: number;
  revealedScenes: { [key: number]: boolean };
  showReading: { [key: number]: boolean };
  selectedReadings: { [key: number]: string };
  handleRevealReading: (index: number, reading: string) => void;
  isMobile: boolean;
  handleToggleReading: (index: number) => void;
  handleContinue: () => void;
}) => {
  const randomReading = getRandomReading(scene.alt);
  const text = scene.texts[index % scene.texts.length];

  if (!revealedScenes[index]) {
    return (
      <div className={styles.vignetteGradient}>
        <SceneImage scene={scene} isMobile={isMobile} text={text} />
        <div className={styles.continueButtonWrapper}>
          <RevealButton
            index={index}
            randomReading={randomReading}
            handleRevealReading={handleRevealReading}
          />
          <ContinueButton onClick={handleContinue} text="Continue" />
        </div>
      </div>
    );
  }

  if (showReading[index]) {
    return (
      <div
        className={styles.readingFrame}
        onClick={() => handleToggleReading(index)}
      >
        {selectedReadings[index]}
      </div>
    );
  }

  return (
    <div className={`${styles.vignetteGradient} ${text ? styles.dimmed : ""}`}>
      <SceneImage scene={scene} isMobile={isMobile} text={text} />
    </div>
  );
};

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
}: Readonly<SceneContainerProps>) {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;

  return (
    <div className={styles.sceneContainerWrapper}>
      <div className={styles.sceneContainer}>
        <P5Background />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className={styles.imageContainer}>
            {scenes.map((scene, index) =>
              index === currentSceneIndex ? (
                <SceneView
                  key={scene.alt}
                  scene={scene}
                  index={index}
                  revealedScenes={revealedScenes}
                  showReading={showReading}
                  selectedReadings={selectedReadings}
                  handleRevealReading={handleRevealReading}
                  handleToggleReading={handleToggleReading}
                  isMobile={isMobile}
                  handleContinue={handleContinue}
                />
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
