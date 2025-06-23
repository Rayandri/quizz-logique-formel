"use client"

import { useMemo, useState } from "react"
import type { QCM } from "@/lib/questions"
import KatexRenderer from "./KatexRenderer"
import Footer from "./Footer"
import { DifficultyBadge } from "./DifficultyBadge"

interface QuestionCardProps {
  question: QCM
  questionNumber: number
  totalQuestions: number
  selectedAnswer: number | string | null
  onAnswerSelect: (answer: number | string) => void
  onValidate: () => void
  onSkip: () => void
  onReturnToMenu: () => void
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
  onReturnToMenu,
  isValidated,
  currentScore,
}: QuestionCardProps) {
  const [refreshKey, setRefreshKey] = useState(0)
  const [numericAnswer, setNumericAnswer] = useState("")
  const memoizedOptions = useMemo(() => question.options, [question.id, refreshKey])
  
  const isNumericQuestion = question.answerType === 'numeric'

  const handleRepairLatex = () => {
    // Force un re-rendu plus agressif
    setRefreshKey(prev => prev + Math.random())
    // Forcer le re-rendu de KaTeX après un court délai
    setTimeout(() => {
      if (typeof window !== "undefined" && window.renderMathInElement) {
        window.renderMathInElement(document.body, {
          delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false}
          ]
        })
      }
    }, 100)
  }

  const handleClearCache = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("quiz-logique-state")
      // Force une actualisation complète de la page pour recharger les questions corrigées
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
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

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">
                Question {questionNumber} sur {totalQuestions}
              </span>
              <DifficultyBadge difficulty={question.difficulty || "facile"} />
            </div>
            <div className="w-full max-w-xs bg-gray-700 rounded-full h-2 ml-4">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          <KatexRenderer key={`question-${question.id}-${refreshKey}`} className="text-xl font-semibold text-gray-200 mb-6 leading-relaxed">
            {question.question}
          </KatexRenderer>
        </div>

        {isNumericQuestion ? (
          <div className="mb-8">
            <div className="space-y-4">
              <div className="text-gray-300 text-sm">
                Entrez votre réponse numérique :
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  value={numericAnswer}
                  onChange={(e) => {
                    setNumericAnswer(e.target.value)
                    onAnswerSelect(e.target.value)
                  }}
                  disabled={isValidated}
                  className={`flex-1 px-4 py-3 text-lg bg-gray-700 border rounded-lg text-gray-200 focus:outline-none focus:ring-2 transition-colors duration-200 ${
                    isValidated
                      ? numericAnswer === question.answer?.toString()
                        ? "border-green-500 focus:ring-green-500"
                        : "border-red-500 focus:ring-red-500"
                      : "border-gray-600 focus:ring-indigo-500"
                  }`}
                  placeholder="Votre réponse..."
                />
                {isValidated && (
                  <div className="text-gray-300">
                    Réponse correcte : <span className="text-green-400 font-bold">{question.answer}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3 mb-8">
            {memoizedOptions.map((option, index) => (
              <label
                key={`${question.id}-${index}-${refreshKey}`}
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
                <KatexRenderer key={`option-${question.id}-${index}-${refreshKey}`} className="text-gray-200 flex-1">
                  {option}
                </KatexRenderer>
              </label>
            ))}
          </div>
        )}

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
