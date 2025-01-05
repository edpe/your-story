"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import {
  scenesData,
  abstractTitles,
  introductions,
  endings,
  sceneReadings,
  oracleQuestions,
} from "./storyContent";
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
  const [currentSceneIndex, setCurrentSceneIndex] = useState(-1); // Start with -1 to show title and introduction first
  const [showTransition, setShowTransition] = useState(false);
  const [revealedScenes, setRevealedScenes] = useState<{
    [key: number]: boolean;
  }>({});
  const [showReading, setShowReading] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [selectedReadings, setSelectedReadings] = useState<{
    [key: number]: string;
  }>({});

  const handleRevealReading = (index: number, reading: string) => {
    setRevealedScenes((prev) => ({
      ...prev,
      [index]: true,
    }));
    setShowReading((prev) => ({
      ...prev,
      [index]: true,
    }));
    setSelectedReadings((prev) => ({
      ...prev,
      [index]: prev[index] || reading, // Ensure the reading remains the same
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

  const handleContinue = () => {
    if (showTransition) {
      setShowTransition(false);
      setCurrentSceneIndex(currentSceneIndex + 1);
    } else if (currentSceneIndex < scenes.length - 1) {
      setShowTransition(true);
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
    // Show loading screen for 6 seconds (matches ripple animation duration)
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);

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
        <div className={styles.backgroundImage}></div>
        <div className={styles.rippleText}>Oracle</div>
      </div>
    );
  }

  if (isLoadingReading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.rippleLoadingText}>
          The Oracle is preparing your reading . . .
        </div>
      </div>
    );
  }

  return (
    <main
      className="relative overflow-hidden"
      style={{ backgroundColor: showStory ? "black" : "transparent" }}
    >
      {!showStory && <div className={styles.backgroundImage}></div>}
      {showQuestions && (
        <QuestionFlow
          questions={questions}
          onComplete={handleQuestionsComplete}
        />
      )}

      {showStory && (
        <>
          {currentSceneIndex === -1 ? (
            <div className={styles.introScreen}>
              {/* Main title of the story */}
              <h1 className={styles.title}>{title}</h1>

              {/* Story introduction text */}
              <div className={styles.introduction}>{introduction}</div>

              {/* Continue button to navigate to the first scene */}
              <button
                className={styles.continueButton}
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          ) : showTransition ? (
            <div className={styles.transitionScreen}>
              {/* Transition text between scenes */}
              <div className={styles.transitionText}>
                {scenes[currentSceneIndex].transitionText[
                  scenes[(currentSceneIndex + 1) % scenes.length].alt
                    .toLowerCase()
                    .replace(/ /g, "-") as keyof Scene["transitionText"]
                ] + " . . ."}
              </div>

              {/* Continue button to navigate to the next scene */}
              <button
                className={styles.continueButton}
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          ) : (
            <>
              {/* Container for the current story scene */}
              <div className={styles.imageContainer}>
                {scenes.map((scene, index) => {
                  if (index !== currentSceneIndex) return null;

                  const readingKey = toCamelCase(
                    scene.alt.toLowerCase().replace(/ /g, "-")
                  ) as keyof typeof sceneReadings;
                  const randomReading =
                    sceneReadings[readingKey] &&
                    sceneReadings[readingKey][
                      Math.floor(
                        Math.random() * sceneReadings[readingKey].length
                      )
                    ];

                  return (
                    <div key={scene.alt} className={styles.scene}>
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
                            <div
                              className={
                                index % 2 === 0
                                  ? styles.overlayTextLeft
                                  : styles.overlayTextRight
                              }
                            >
                              <div>
                                {scene.texts[index % scene.texts.length]}
                              </div>
                            </div>
                            <button
                              className={styles.revealButton}
                              onClick={() =>
                                handleRevealReading(index, randomReading)
                              }
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
                                  <div>
                                    {scene.texts[index % scene.texts.length]}
                                  </div>
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

              {/* Continue button to navigate to the next scene */}
              {currentSceneIndex < scenes.length - 1 && (
                <button
                  className={styles.continueButton}
                  onClick={handleContinue}
                >
                  Continue
                </button>
              )}

              {/* Story ending text */}
              {currentSceneIndex === scenes.length - 1 && (
                <div className={styles.ending}>{ending}</div>
              )}
            </>
          )}
        </>
      )}
    </main>
  );
}
