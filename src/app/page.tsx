"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import {
  scenesData,
  abstractTitles,
  introductions,
  endings,
  sceneReadings,
} from "./storyContent";
import { random } from "gsap";

type Scene = {
  src: string;
  alt: string;
  texts: string[];
  transitionText: {
    "desert-of-keys"?: string;
    "tree-of-threads"?: string;
    "mirror-sea"?: string;
    "night-circus"?: string;
    "labyrinth-of-voices"?: string;
    "chamber-of-light"?: string;
    "spiral-staircase"?: string;
    "the-gateway"?: string;
  };
};

function toCamelCase(str: string) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

export default function Home() {
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [title, setTitle] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [ending, setEnding] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 3 seconds (matches animation duration)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    window.scrollTo(0, 0);

    // Shuffle the scenes array
    scenesData.sort(() => Math.random() - 0.5);

    // Select 5 random scenes
    const selectedScenes = scenesData.slice(0, 5);

    // Select a random title
    const randomTitle =
      abstractTitles[Math.floor(Math.random() * abstractTitles.length)];

    // Select a random introduction
    const randomIntroduction =
      introductions[Math.floor(Math.random() * introductions.length)];

    // Select a random ending
    const randomEnding = endings[Math.floor(Math.random() * endings.length)];

    setScenes(selectedScenes);
    setTitle(randomTitle);
    setIntroduction(randomIntroduction);
    setEnding(randomEnding);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.rippleText}>Oracle</div>
      </div>
    );
  }

  return (
    <main className="relative overflow-hidden">
      {/* Main title of the story */}
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {title}
      </motion.h1>

      {/* Story introduction text */}
      <motion.div
        className={styles.introduction}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        {introduction}
      </motion.div>

      {/* Container for all story scenes */}
      <div className={styles.imageContainer}>
        {scenes.map((scene, index) => {
          const nextScene = scenes[(index + 1) % scenes.length];
          const transitionText =
            scene.transitionText[
              nextScene.alt
                .toLowerCase()
                .replace(/ /g, "-") as keyof Scene["transitionText"]
            ] + " . . .";
          const readingKey = toCamelCase(
            scene.alt.toLowerCase().replace(/ /g, "-")
          ) as keyof typeof sceneReadings;
          const randomReading =
            sceneReadings[readingKey] &&
            sceneReadings[readingKey][
              Math.floor(Math.random() * sceneReadings[readingKey].length)
            ];

          return (
            <motion.div
              key={scene.alt}
              className={styles.scene}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1 }}
            >
              {/* Scene image with vignette effect */}
              <div className={styles.vignetteGradient}>
                <Image
                  src={scene.src}
                  alt={scene.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className={styles.imageWithMargin}
                  layout="responsive"
                  style={{ width: "100%", height: "auto" }}
                />

                {/* Overlay text on the scene image */}
                <motion.div
                  className={
                    index % 2 === 0
                      ? styles.overlayTextLeft
                      : styles.overlayTextRight
                  }
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 4 }}
                >
                  {/* Main scene text */}
                  <div>{scene.texts[index % scene.texts.length]}</div>
                  {/* Additional reading text if available */}
                  {randomReading && (
                    <div>
                      <br />
                      {randomReading}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Transition text between scenes */}
              {index < scenes.length - 1 && (
                <div className={styles.verticalSpacing}>
                  <motion.div
                    className={styles.transitionText}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                  >
                    {transitionText}
                  </motion.div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Story ending text */}
      <motion.div
        className={styles.ending}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        {ending}
      </motion.div>
    </main>
  );
}
