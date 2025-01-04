"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { motion, AnimatePresence } from "framer-motion";

type Question = {
  question: string;
  options: string[];
};

type Answer = {
  question: string;
  answer: string;
};

interface QuestionFlowProps {
  questions: Question[];
  onComplete: (answers: Answer[]) => void;
}

export default function QuestionFlow({
  questions,
  onComplete,
}: QuestionFlowProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleAnswer = (answer: string) => {
    const newAnswers = [
      ...answers,
      {
        question: questions[currentQuestionIndex].question,
        answer,
      },
    ];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 500);
    } else {
      // Call onComplete when we reach the last question
      onComplete(newAnswers);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className={styles.questionContainer}>
      <div className={styles.backgroundImage}></div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={styles.fullScreen}
        >
          <div className={`${styles.rippleQuestionText} ${styles.question}`}>
            {currentQuestion.question}
          </div>
          <div className={styles.optionsContainer}>
            <AnimatePresence>
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={index}
                  className={styles.optionButton}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
