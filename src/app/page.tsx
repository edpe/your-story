"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import {
  scenesData,
  abstractTitles,
  introductions,
  endings,
  oracleQuestions,
} from "./data/storyContent";
import QuestionFlow from "./components/QuestionFlow";
import LoadingScreen from "./components/LoadingScreen";
import IntroScreen from "./components/IntroScreen";
import TransitionScreen from "./components/TransitionScreen";
import SceneContainer from "./components/SceneContainer";

export type Scene = {
  src: string;
  mobileSrc?: string;
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
  const [state, setState] = useState({
    scenes: [] as Scene[],
    title: "",
    introduction: "",
    ending: "",
    isLoading: true,
    showQuestions: false,
    showStory: false,
    isLoadingReading: false,
    currentSceneIndex: -1,
    showTransition: true,
    revealedScenes: {} as { [key: number]: boolean },
    showReading: {} as { [key: number]: boolean },
    selectedReadings: {} as { [key: number]: string },
    questions: oracleQuestions,
  });

  const handleRevealReading = (index: number, reading: string) => {
    setState((prev) => ({
      ...prev,
      revealedScenes: {
        ...prev.revealedScenes,
        [index]: true,
      },
      showReading: {
        ...prev.showReading,
        [index]: true,
      },
      selectedReadings: {
        ...prev.selectedReadings,
        [index]: prev.selectedReadings[index] || reading,
      },
    }));
  };

  const handleToggleReading = (index: number) => {
    setState((prev) => ({
      ...prev,
      showReading: {
        ...prev.showReading,
        [index]: !prev.showReading[index],
      },
      revealedScenes: {
        ...prev.revealedScenes,
        [index]: prev.showReading[index] ? false : prev.revealedScenes[index],
      },
    }));
  };

  const handleContinue = () => {
    console.log(state.currentSceneIndex);
    console.log(state.showTransition);
    setState((prev) => {
      const nextSceneIndex = prev.showTransition
        ? prev.currentSceneIndex + 1
        : prev.currentSceneIndex;
      return {
        ...prev,
        showTransition: !prev.showTransition,
        currentSceneIndex: nextSceneIndex,
      };
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        showQuestions: true,
      }));
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleQuestionsComplete = (
    answers: Array<{ question: string; answer: string }>
  ) => {
    setState((prev) => ({
      ...prev,
      showQuestions: false,
      isLoadingReading: true,
    }));
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        isLoadingReading: false,
        showStory: true,
      }));
    }, 6000);
  };

  useEffect(() => {
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }, 6000);

    window.scrollTo(0, 0);

    scenesData.sort(() => Math.random() - 0.5);
    const selectedScenes = scenesData.slice(0, 5);
    const randomTitle =
      abstractTitles[Math.floor(Math.random() * abstractTitles.length)];
    const randomIntroduction =
      introductions[Math.floor(Math.random() * introductions.length)];
    const randomEnding = endings[Math.floor(Math.random() * endings.length)];

    const shuffledQuestions = [...oracleQuestions].sort(
      () => 0.5 - Math.random()
    );

    setState((prev) => ({
      ...prev,
      scenes: selectedScenes,
      title: randomTitle,
      introduction: randomIntroduction,
      ending: randomEnding,
      questions: shuffledQuestions.slice(0, 3),
    }));
  }, []);

  const renderContent = () => {
    if (state.currentSceneIndex === -1) {
      return (
        <IntroScreen
          title={state.title}
          introduction={state.introduction}
          onContinue={handleContinue}
        />
      );
    } else if (state.showTransition) {
      return (
        <TransitionScreen
          transitionText={
            state.scenes[state.currentSceneIndex].transitionText[
              state.scenes[
                (state.currentSceneIndex + 1) % state.scenes.length
              ].alt
                .toLowerCase()
                .replace(/ /g, "-") as keyof Scene["transitionText"]
            ] + " . . ."
          }
          onContinue={handleContinue}
        />
      );
    } else {
      return (
        <SceneContainer
          scenes={state.scenes}
          currentSceneIndex={state.currentSceneIndex}
          revealedScenes={state.revealedScenes}
          showReading={state.showReading}
          selectedReadings={state.selectedReadings}
          handleRevealReading={handleRevealReading}
          handleToggleReading={handleToggleReading}
          handleContinue={handleContinue}
          ending={state.ending}
        />
      );
    }
  };

  if (state.isLoading) {
    return <LoadingScreen text="Oracle" type="title" />;
  }

  if (state.isLoadingReading) {
    return (
      <LoadingScreen
        text="The Oracle is preparing your reading . . ."
        type="transition"
      />
    );
  }

  return (
    <main
      className="relative overflow-hidden"
      style={{ backgroundColor: state.showStory ? "black" : "transparent" }}
    >
      {!state.showStory && <div className={styles.backgroundImage}></div>}
      {state.showQuestions && (
        <QuestionFlow
          questions={state.questions}
          onComplete={handleQuestionsComplete}
        />
      )}

      {state.showStory && renderContent()}
    </main>
  );
}
