"use client";

import { useState } from "react";
import data from "../../data.json";
import { motion } from "framer-motion";

const quiz = data.quiz;
const questions = quiz.questions;
const results = quiz.results;

export default function AIQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleOption = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  // Determine the most common answer
  const getResult = () => {
    if (answers.length === 0) return null;
    const counts: Record<string, number> = {};
    answers.forEach((a) => {
      counts[a] = (counts[a] || 0) + 1;
    });
    const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    return results[top as keyof typeof results];
  };

  return (
    <section className="py-20 relative overflow-hidden section-transparent">
      {/* Removed global animated background class */}
      {/* Glowing accent orb */}
      <motion.div
        className="absolute right-12 top-16 w-24 h-24 rounded-full bg-[var(--color-accent)]/30 blur-3xl z-0"
        animate={{ y: [0, 30, 0], opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="max-w-xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-[var(--color-white)]">
          Which AI Solution Fits You?
        </h2>
        {!showResult ? (
          <div className="rounded-xl shadow p-8">
            <div className="text-lg font-semibold mb-6 text-[var(--color-accent)]">
              {questions[step].question}
            </div>
            <div className="flex flex-col gap-4">
              {questions[step].options.map(
                (opt: { label: string; value: string }) => (
                  <button
                    key={opt.value}
                    className="btn-ripple bg-[var(--color-accent)] text-[var(--color-black)] font-semibold px-4 py-2 text-sm rounded-lg shadow transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent)]/60"
                    onClick={() => handleOption(opt.value)}
                    aria-label={`Select option: ${opt.label}`}
                  >
                    {opt.label}
                  </button>
                ),
              )}
            </div>
          </div>
        ) : (
          <div className="rounded-xl shadow p-8 flex flex-col items-center">
            <div className="text-2xl font-bold text-[var(--color-accent)] mb-4">
              {getResult()?.title}
            </div>
            <div className="text-lg text-[var(--color-white)]/80 mb-6">
              {getResult()?.description}
            </div>
            <button
              className="btn-ripple bg-[var(--color-accent)] text-[var(--color-black)] font-semibold px-4 py-2 text-sm rounded-lg shadow transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent)]/60 rounded-md"
              onClick={() => {
                setStep(0);
                setAnswers([]);
                setShowResult(false);
              }}
              aria-label="Try again"
            >
              new test
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
