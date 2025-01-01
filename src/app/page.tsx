"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import {
  scenesData,
  abstractTitles,
  introductions,
  endings,
} from "./storyContent";

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

export default function Home() {
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [title, setTitle] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [ending, setEnding] = useState("");

  useEffect(() => {
    // Shuffle the scenes array
    scenesData.sort(() => Math.random() - 0.5);

    // Select a random title
    const randomTitle =
      abstractTitles[Math.floor(Math.random() * abstractTitles.length)];

    // Select a random introduction
    const randomIntroduction =
      introductions[Math.floor(Math.random() * introductions.length)];

    // Select a random ending
    const randomEnding = endings[Math.floor(Math.random() * endings.length)];

    setScenes(scenesData);
    setTitle(randomTitle);
    setIntroduction(randomIntroduction);
    setEnding(randomEnding);
  }, []);

  return (
    <main className="relative overflow-hidden">
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.introduction}>{introduction}</div>
      <div className={styles.imageContainer}>
        {scenes.map((scene, index) => {
          const nextScene = scenes[(index + 1) % scenes.length];
          const transitionText =
            scene.transitionText[
              nextScene.alt
                .toLowerCase()
                .replace(/ /g, "-") as keyof Scene["transitionText"]
            ] + " . . .";

          return (
            <div key={scene.alt} className={styles.scene}>
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
                <div
                  className={
                    index % 2 === 0
                      ? styles.overlayTextLeft
                      : styles.overlayTextRight
                  }
                >
                  {scene.texts[index % scene.texts.length]}
                </div>
              </div>
              {index < scenes.length - 1 && (
                <div className={styles.verticalSpacing}>
                  <div className={styles.transitionText}>{transitionText}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.ending}>{ending}</div>
    </main>
  );
}
