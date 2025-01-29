import Image from "next/image";
import styles from "./SceneContainer.module.css";
import { Scene } from "../page";
import { sceneReadings, getRandomArchetype } from "../data/storyContent";
import React, { useState, useEffect } from "react";
import P5Background from "./P5Background";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GenericButton from "./Button";

export type Archetype = {
  src: string;
  mobileSrc?: string;
  alt: string;
  name: string;
  keywords: string[];
  meaning: string;
  reversed: string;
};

type SceneContainerProps = {
  scenes: Scene[];
  currentSceneIndex: number;
  revealedScenes: { [key: number]: boolean };
  showReading: { [key: number]: boolean };
  selectedReadings: { [key: number]: string };
  handleRevealReading: (index: number, reading: string) => void;
  handleToggleReading: (index: number) => void;
  handleContinue: () => void;
  handlePrevious: () => void;
  ending: string;
  archetypes: Archetype[];
  handleToggleSceneInfo: () => void;
  handleToggleCharacterInfo: () => void;
  showSceneInfo: boolean;
  showCharacterInfo: boolean;
};

function toCamelCase(str: string) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

const toKebabCase = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};

const getReadingForSceneAndArchetype = (
  sceneAlt: string,
  archetypeName: string
) => {
  const sceneKey = toKebabCase(sceneAlt) as keyof typeof sceneReadings;
  const archetypeKey = toKebabCase(
    archetypeName.replace(/^The\s+/i, "")
  ) as keyof (typeof sceneReadings)[typeof sceneKey];

  return (
    sceneReadings[sceneKey]?.[archetypeKey] ||
    "No reading available for this combination."
  );
};

const SceneImage = ({
  scene,
  isMobile,
  text,
  archetype,
}: {
  scene: Scene;
  isMobile: boolean;
  text: string;
  archetype: Archetype;
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
    <Image
      src={archetype.src}
      alt={archetype.alt}
      className={styles.characterOverlay}
      width={894}
      height={1344}
      layout="intrinsic"
    />
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
  archetype,
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
  archetype: Archetype;
}) => {
  const reading = getReadingForSceneAndArchetype(scene.alt, archetype.name);

  if (!revealedScenes[index]) {
    return (
      <div
        className={styles.vignetteGradient}
        onClick={() => handleRevealReading(index, reading)}
      >
        <SceneImage
          scene={scene}
          isMobile={isMobile}
          text={""}
          archetype={archetype}
        />
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
    <div className={`${styles.vignetteGradient} ${styles.dimmed}`}>
      <SceneImage
        scene={scene}
        isMobile={isMobile}
        text={""}
        archetype={archetype}
      />
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
  handlePrevious,
  archetypes,
  handleToggleSceneInfo,
  handleToggleCharacterInfo,
  showSceneInfo,
  showCharacterInfo,
}: Readonly<SceneContainerProps & { archetypes: Archetype[] }>) {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;
  const [sceneSequence, setSceneSequence] = useState<number[]>([]);

  useEffect(() => {
    // Generate the sequence of scenes
    const sequence = Array.from({ length: scenes.length }, (_, index) => index);
    setSceneSequence(sequence);

    // Remove the useEffect hook for touch event handlers
  }, [scenes]);

  return (
    <div className={styles.sceneContainerWrapper}>
      <P5Background />

      {/* Use the same .continueButton style for scene button */}
      {!showSceneInfo &&
        !showCharacterInfo &&
        !showReading[currentSceneIndex] && (
          <GenericButton
            text={scenes[currentSceneIndex].alt}
            onClick={handleToggleSceneInfo}
            className={styles.topCenterButton}
          />
        )}
      {showSceneInfo && (
        <div className={styles.readingFrame} onClick={handleToggleSceneInfo}>
          <div className={styles.readingFrameContent}>
            <h2>{scenes[currentSceneIndex].alt}</h2>
            <h3>Keywords:</h3>
            <p className={styles.keywordList}>
              {scenes[currentSceneIndex].keywords.join(", ")}
            </p>
            <h3>Meaning:</h3>
            <p>{scenes[currentSceneIndex].meaning}</p>
            <h3>Reversed:</h3>
            <p>{scenes[currentSceneIndex].reversed}</p>
          </div>
        </div>
      )}

      {!showSceneInfo && !showCharacterInfo && (
        <div className={styles.sceneContainer}>
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
                    archetype={archetypes[index]}
                  />
                ) : null
              )}
            </div>
            {!showReading[currentSceneIndex] && currentSceneIndex > 0 && (
              <FaArrowLeft
                className={styles.navigationArrowLeft}
                onClick={handlePrevious}
              />
            )}
            {!showReading[currentSceneIndex] &&
              currentSceneIndex < scenes.length - 1 && (
                <FaArrowRight
                  className={styles.navigationArrowRight}
                  onClick={handleContinue}
                />
              )}
            {!showReading[currentSceneIndex] &&
              currentSceneIndex === scenes.length - 1 && (
                <FaArrowRight
                  className={styles.navigationArrowRight}
                  onClick={handleContinue}
                />
              )}
          </div>
        </div>
      )}

      {/* Use the same .continueButton style for character button */}
      {!showSceneInfo &&
        !showCharacterInfo &&
        !showReading[currentSceneIndex] && (
          <GenericButton
            text={archetypes[currentSceneIndex].name}
            onClick={handleToggleCharacterInfo}
            className={styles.bottomCenterButton}
          />
        )}
      {showCharacterInfo && (
        <div
          className={styles.readingFrame}
          onClick={handleToggleCharacterInfo}
          style={{ fontSize: "1.25rem" }} // Adjust the font size for the archetype info screen
        >
          <div className={styles.readingFrameContent}>
            <h2>{archetypes[currentSceneIndex].name}</h2>
            <h3>Keywords:</h3>
            <p className={styles.keywordList}>
              {archetypes[currentSceneIndex].keywords.join(", ")}
            </p>
            <h3>Meaning:</h3>
            <p>{archetypes[currentSceneIndex].meaning}</p>
            <h3>Reversed:</h3>
            <p>{archetypes[currentSceneIndex].reversed}</p>
          </div>
        </div>
      )}
    </div>
  );
}
