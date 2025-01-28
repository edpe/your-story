"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import {
  scenesData,
  abstractTitles,
  introductions,
  endings,
  oracleQuestions,
  getRandomArchetype,
} from "./data/storyContent";
import QuestionFlow from "./components/QuestionFlow";
import LoadingScreen from "./components/LoadingScreen";
import IntroScreen from "./components/IntroScreen";
import TransitionScreen from "./components/TransitionScreen";
import SceneContainer from "./components/SceneContainer";
import EndingScreen from "./components/EndingScreen";
import type { Archetype } from "./components/SceneContainer";

export type SceneName =
  | "desert-of-keys"
  | "tree-of-threads"
  | "mirror-sea"
  | "night-circus"
  | "labyrinth-of-voices"
  | "chamber-of-light"
  | "spiral-staircase"
  | "the-gateway"
  | "starry-abyss"
  | "ember-cave"
  | "broken-bridge"
  | "forgotten-library";

export type Scene = {
  src: string;
  mobileSrc?: string;
  alt: string;
  keywords: string[];
  meaning: string;
  reversed: string;
  transitionText: Partial<Record<SceneName, string>>;
};

type State = {
  scenes: Scene[];
  title: string;
  introduction: string;
  ending: string;
  isLoading: boolean;
  showQuestions: boolean;
  showStory: boolean;
  isLoadingReading: boolean;
  currentSceneIndex: number;
  showTransition: boolean;
  revealedScenes: { [key: number]: boolean };
  showReading: { [key: number]: boolean };
  selectedReadings: { [key: number]: string };
  questions: typeof oracleQuestions;
  archetypes: Archetype[];
  showSceneInfo: boolean;
  showCharacterInfo: boolean;
};

export default function Home() {
  const [state, setState] = useState<State>({
    scenes: [],
    title: "",
    introduction: "",
    ending: "",
    isLoading: true,
    showQuestions: false,
    showStory: false,
    isLoadingReading: false,
    currentSceneIndex: -1,
    showTransition: true,
    revealedScenes: {},
    showReading: {},
    selectedReadings: {},
    questions: oracleQuestions,
    archetypes: [],
    showSceneInfo: false,
    showCharacterInfo: false,
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

  const handlePrevious = () => {
    setState((prev) => {
      const prevSceneIndex = prev.showTransition
        ? prev.currentSceneIndex - 1
        : prev.currentSceneIndex;
      return {
        ...prev,
        showTransition: !prev.showTransition,
        currentSceneIndex: prevSceneIndex,
      };
    });
  };

  const handleSkip = () => {
    setState((prev) => ({
      ...prev,
      isLoading: false,
      showQuestions: false,
      showStory: true,
      currentSceneIndex: 0,
      showTransition: false,
    }));
  };

  const handleRestart = () => {
    setState((prev) => ({
      ...prev,
      scenes: [],
      title: "",
      introduction: "",
      ending: "",
      isLoading: true,
      showQuestions: false,
      showStory: false,
      isLoadingReading: false,
      currentSceneIndex: -1,
      showTransition: true,
      revealedScenes: {},
      showReading: {},
      selectedReadings: {},
      questions: oracleQuestions,
      archetypes: [],
      showSceneInfo: false,
      showCharacterInfo: false,
    }));
  };

  const handleToggleSceneInfo = () => {
    setState((prev) => ({
      ...prev,
      showSceneInfo: !prev.showSceneInfo,
    }));
  };

  const handleToggleCharacterInfo = () => {
    setState((prev) => ({
      ...prev,
      showCharacterInfo: !prev.showCharacterInfo,
    }));
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
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          isLoading: false,
        }));
      }, 6000);

      window.scrollTo(0, 0);

      // Shuffle and select scenes
      const shuffledScenes = [...scenesData].sort(() => Math.random() - 0.5);
      const selectedScenes = shuffledScenes.slice(0, 5);

      // Shuffle and select archetypes
      const shuffledArchetypes = Array.from({ length: scenesData.length }, () =>
        getRandomArchetype()
      ).sort(() => Math.random() - 0.5);
      const selectedArchetypes = shuffledArchetypes.slice(0, 5);

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
        archetypes: selectedArchetypes,
      }));
    }
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
    } else if (state.currentSceneIndex === state.scenes.length) {
      return (
        <EndingScreen
          ending={state.ending}
          onRestart={handleRestart}
          onPrevious={handlePrevious}
        />
      );
    } else if (
      state.currentSceneIndex === state.scenes.length - 1 &&
      state.showTransition
    ) {
      return (
        <TransitionScreen
          transitionText="The journey is coming to an end..."
          onContinue={handleContinue}
          onPrevious={handlePrevious}
          showPrevious={state.currentSceneIndex > 0}
          showNext={true}
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
          onPrevious={handlePrevious}
          showPrevious={state.currentSceneIndex > 0}
          showNext={state.currentSceneIndex < state.scenes.length - 1}
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
          handlePrevious={handlePrevious}
          ending={state.ending}
          archetypes={state.archetypes}
          handleToggleSceneInfo={handleToggleSceneInfo}
          handleToggleCharacterInfo={handleToggleCharacterInfo}
          showSceneInfo={state.showSceneInfo}
          showCharacterInfo={state.showCharacterInfo}
        />
      );
    }
  };

  return (
    <main
      className="relative overflow-hidden"
      style={{ backgroundColor: state.showStory ? "black" : "transparent" }}
    >
      {!state.showStory && <div className={styles.backgroundImage}></div>}
      {!state.showStory && !state.isLoading && (
        <button onClick={handleSkip} className={styles.skipButton}>
          Skip
        </button>
      )}
      {state.isLoading && <LoadingScreen text="Oracle" type="title" />}
      {state.isLoadingReading && (
        <LoadingScreen
          text="The Oracle is preparing your reading . . ."
          type="transition"
        />
      )}
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
