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
  oracleQuestions,
} from "./storyContent";
import { random } from "gsap";
import QuestionFlow from "./QuestionFlow";

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
  const [showQuestions, setShowQuestions] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [isLoadingReading, setIsLoadingReading] = useState(false);
  const [questions, setQuestions] = useState(oracleQuestions);
  const [revealedScenes, setRevealedScenes] = useState<{
    [key: number]: boolean;
  }>({});
  const [showReading, setShowReading] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleRevealReading = (index: number) => {
    setRevealedScenes((prev) => ({
      ...prev,
      [index]: true,
    }));
    setShowReading((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleToggleReading = (index: number) => {
    setShowReading((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    if (showReading[index]) {
      setRevealedScenes((prev) => ({
        ...prev,
        [index]: false,
      }));
    }
  };

  useEffect(() => {
    // Initial loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowQuestions(true);
    }, 6000); // Matches the ripple animation duration

    return () => clearTimeout(timer);
  }, []);

  const handleQuestionsComplete = (
    answers: Array<{ question: string; answer: string }>
  ) => {
    setShowQuestions(false);
    setIsLoadingReading(true);
    setTimeout(() => {
      setIsLoadingReading(false);
      setShowStory(true);
      // Here you would generate the story based on the answers
    }, 6000); // Increased the duration to 6000ms
  };

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

    // Randomize three questions from the oracleQuestions array
    const shuffledQuestions = [...oracleQuestions].sort(
      () => 0.5 - Math.random()
    );
    setQuestions(shuffledQuestions.slice(0, 3));
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.rippleText}>Oracle</div>
      </div>
    );
  }

  if (isLoadingReading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.rippleLoadingText}>
          The Oracle is preparing your reading . . .
        </div>
      </div>
    );
  }

  return (
    <main className="relative overflow-hidden">
      {showQuestions && (
        <QuestionFlow
          questions={questions}
          onComplete={handleQuestionsComplete}
        />
      )}

      {showStory && (
        <>
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
                    {!revealedScenes[index] ? (
                      <>
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
                          <div>{scene.texts[index % scene.texts.length]}</div>
                        </motion.div>
                        <button
                          className={styles.revealButton}
                          onClick={() => handleRevealReading(index)}
                        >
                          Receive your reading
                        </button>
                      </>
                    ) : (
                      <motion.div
                        className={styles.readingReveal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        onClick={() => handleToggleReading(index)}
                      >
                        {showReading[index] ? (
                          <div className={styles.readingFrame}>
                            {randomReading}
                          </div>
                        ) : (
                          <>
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
                              <div>
                                {scene.texts[index % scene.texts.length]}
                              </div>
                            </motion.div>
                          </>
                        )}
                      </motion.div>
                    )}
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
        </>
      )}
    </main>
  );
}
