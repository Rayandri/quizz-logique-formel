"use client"

import type { QCM } from "@/lib/questions"
import KatexRenderer from "./KatexRenderer"
import Footer from "./Footer"

interface QuestionCardProps {
  question: QCM
  questionNumber: number
  totalQuestions: number
  selectedAnswer: number | null
  onAnswerSelect: (answer: number) => void
  onValidate: () => void
  onSkip: () => void
  isValidated: boolean
  currentScore: number
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onValidate,
  onSkip,
  isValidated,
  currentScore,
}: QuestionCardProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-2xl">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-400">
              Question {questionNumber} sur {totalQuestions}
            </span>
            <div className="w-full max-w-xs bg-gray-700 rounded-full h-2 ml-4">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          <KatexRenderer className="text-xl font-semibold text-gray-200 mb-6">
            {question.question}
          </KatexRenderer>
        </div>

        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center p-4 rounded-lg border cursor-pointer transition-colors duration-200 ${
                isValidated
                  ? index === question.answer
                    ? "border-green-500 bg-green-900/20"
                    : selectedAnswer === index && index !== question.answer
                      ? "border-red-500 bg-red-900/20"
                      : "border-gray-600 bg-gray-700/50"
                  : selectedAnswer === index
                    ? "border-indigo-500 bg-indigo-900/20"
                    : "border-gray-600 bg-gray-700/50 hover:border-gray-500"
              }`}
            >
              <input
                type="radio"
                name="answer"
                value={index}
                checked={selectedAnswer === index}
                onChange={() => onAnswerSelect(index)}
                disabled={isValidated}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                  selectedAnswer === index
                    ? isValidated
                      ? index === question.answer
                        ? "border-green-500"
                        : "border-red-500"
                      : "border-indigo-500"
                    : "border-gray-400"
                }`}
              >
                {selectedAnswer === index && (
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isValidated ? (index === question.answer ? "bg-green-500" : "bg-red-500") : "bg-indigo-500"
                    }`}
                  />
                )}
              </div>
              <KatexRenderer className="text-gray-200 flex-1">
                {option}
              </KatexRenderer>
            </label>
          ))}
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-400">
            Score actuel :{" "}
            <span className={currentScore > questionNumber / 2 ? "text-green-400" : "text-red-400"}>
              {currentScore}/{questionNumber - 1}
            </span>
          </div>
          {!isValidated && (
            <button
              onClick={onSkip}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white text-sm rounded-md transition-colors duration-200"
            >
              Passer
            </button>
          )}
        </div>

        <button
          onClick={onValidate}
          disabled={selectedAnswer === null || isValidated}
          className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Valider
        </button>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
