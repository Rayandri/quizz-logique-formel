"use client"

import { useMemo, useState } from "react"
import type { QCM } from "@/lib/questions"
import KatexRenderer from "./KatexRenderer"
import Footer from "./Footer"

interface ExplanationBoxProps {
  question: QCM
  selectedAnswer: number | null
  onNext: () => void
  onReturnToMenu: () => void
  isLastQuestion: boolean
  skippedQuestion: boolean
}

export default function ExplanationBox({
  question,
  selectedAnswer,
  onNext,
  onReturnToMenu,
  isLastQuestion,
  skippedQuestion,
}: ExplanationBoxProps) {
  const [refreshKey, setRefreshKey] = useState(0)
  
  const processedExplanation = useMemo(() => {
    return question.explanation
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-100">$1</strong>')
      .replace(/\n\n/g, '</p><p class="mt-3">')
      .replace(/\n/g, '<br/>')
      .replace(/•/g, '<span class="text-indigo-400">•</span>')
  }, [question.explanation, refreshKey])

  const handleRepairLatex = () => {
    setRefreshKey(prev => prev + 1)
  }

  const handleClearCache = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("quiz-logique-state")
      alert("Cache vidé !")
    }
  }

  const isCorrect = selectedAnswer === question.answer

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={onReturnToMenu}
            className="px-3 py-2 bg-gray-600 hover:bg-gray-500 text-white text-sm rounded-md transition-colors duration-200"
          >
            ← Menu
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleClearCache}
              className="px-2 py-1 bg-red-600 hover:bg-red-500 text-white text-xs rounded transition-colors duration-200"
              title="Vider le cache"
            >
              🗑️ Cache
            </button>
            <button
              onClick={handleRepairLatex}
              className="px-2 py-1 bg-orange-600 hover:bg-orange-500 text-white text-xs rounded transition-colors duration-200"
              title="Réparer l'affichage LaTeX"
            >
              Réparer LaTeX
            </button>
          </div>
        </div>

        <div className="text-center mb-6">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
              skippedQuestion
                ? "bg-gray-600 text-gray-300"
                : selectedAnswer === question.answer
                  ? "bg-green-900/20 text-green-400"
                  : "bg-red-900/20 text-red-400"
            }`}
          >
            {skippedQuestion ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : selectedAnswer === question.answer ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>

          <h3
            className={`text-2xl font-bold mb-2 ${
              skippedQuestion ? "text-gray-400" : selectedAnswer === question.answer ? "text-green-400" : "text-red-400"
            }`}
          >
            {skippedQuestion ? "Question passée" : selectedAnswer === question.answer ? "Correct !" : "Incorrect"}
          </h3>
        </div>

        <div className="mb-6">
          <KatexRenderer key={`question-${question.id}-${refreshKey}`} className="text-lg font-semibold text-gray-200 mb-2">
            {question.question}
          </KatexRenderer>

          <div className="space-y-2 mb-4">
            {!skippedQuestion && selectedAnswer !== null && (
              <p className="text-gray-300">
                <span className="font-medium">Votre réponse :</span>{" "}
                <KatexRenderer key={`selected-${question.id}-${refreshKey}`} className={selectedAnswer === question.answer ? "text-green-400" : "text-red-400"}>
                  {question.options[selectedAnswer]}
                </KatexRenderer>
              </p>
            )}

            <p className="text-gray-300">
              <span className="font-medium">Bonne réponse :</span>{" "}
              <KatexRenderer key={`correct-${question.id}-${refreshKey}`} className="text-green-400">
                {question.options[question.answer]}
              </KatexRenderer>
            </p>
          </div>
        </div>

        <div className="bg-gray-700/50 rounded-lg p-4 mb-8">
          <h5 className="font-semibold text-gray-200 mb-2">Explication :</h5>
          <KatexRenderer key={`explanation-${question.id}-${refreshKey}`} className="text-gray-300 leading-relaxed prose prose-invert max-w-none">
            {processedExplanation}
          </KatexRenderer>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          {isLastQuestion ? "Voir les résultats" : "Question suivante"}
        </button>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
