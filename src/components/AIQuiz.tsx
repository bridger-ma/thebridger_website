import { useState } from 'react';
import data from '../../data.json';

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
    answers.forEach(a => { counts[a] = (counts[a] || 0) + 1; });
    const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    return results[top as keyof typeof results];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 to-background">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Which AI Solution Fits You?</h2>
        {!showResult ? (
          <div className="bg-white/80 dark:bg-background/80 rounded-xl shadow p-8">
            <div className="text-lg font-semibold mb-6 text-accent">{questions[step].question}</div>
            <div className="flex flex-col gap-4">
              {questions[step].options.map((opt: { label: string; value: string }) => (
                <button
                  key={opt.value}
                  className="btn-ripple bg-accent/90 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-accent transition focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/60"
                  onClick={() => handleOption(opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white/80 dark:bg-background/80 rounded-xl shadow p-8 flex flex-col items-center">
            <div className="text-2xl font-bold text-accent mb-4">{getResult()?.title}</div>
            <div className="text-lg text-foreground/80 mb-6">{getResult()?.description}</div>
            <button
              className="btn-ripple bg-accent/90 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-accent transition focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/60"
              onClick={() => { setStep(0); setAnswers([]); setShowResult(false); }}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 