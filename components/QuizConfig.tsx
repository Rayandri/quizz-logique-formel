"use client"

import type React from "react"
import { useState, useMemo } from "react"
import Footer from "./Footer"
import { QUESTIONS, type DifficultyLevel } from "@/lib/questions"

type SelectionMode = "random" | "difficulty"

interface QuizConfigProps {
  onStart: (numQuestions: number, mode: SelectionMode, difficulty?: DifficultyLevel) => void
}

export default function QuizConfig({ onStart }: QuizConfigProps) {
  const [numQuestions, setNumQuestions] = useState(10)
  const [selectionMode, setSelectionMode] = useState<SelectionMode>("random")
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>("facile")

  const questionsCount = useMemo(() => {
    const total = QUESTIONS.length
    const byDifficulty = {
      cours: QUESTIONS.filter(q => q.difficulty === "cours").length,
      facile: QUESTIONS.filter(q => q.difficulty === "facile").length,
      moyen: QUESTIONS.filter(q => q.difficulty === "moyen").length,
      dur: QUESTIONS.filter(q => q.difficulty === "dur").length,
    }
    return { total, byDifficulty }
  }, [])

  const availableQuestions = useMemo(() => {
    if (selectionMode === "random") {
      return questionsCount.total
    }
    return questionsCount.byDifficulty[selectedDifficulty]
  }, [selectionMode, selectedDifficulty, questionsCount])

  const maxSelectableQuestions = Math.min(50, availableQuestions)
  const questionOptions = useMemo(() => {
    const options = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    return options.filter(option => option <= maxSelectableQuestions)
  }, [maxSelectableQuestions])

  // Ajuster numQuestions si nécessaire
  useMemo(() => {
    if (numQuestions > maxSelectableQuestions) {
      setNumQuestions(Math.min(questionOptions[questionOptions.length - 1] || 5, maxSelectableQuestions))
    }
  }, [numQuestions, maxSelectableQuestions, questionOptions])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onStart(numQuestions, selectionMode, selectionMode === "difficulty" ? selectedDifficulty : undefined)
  }

  const difficulties: { value: DifficultyLevel; label: string; color: string }[] = [
    { value: "cours", label: "Cours", color: "bg-blue-600" },
    { value: "facile", label: "Facile", color: "bg-green-600" },
    { value: "moyen", label: "Moyen", color: "bg-yellow-600" },
    { value: "dur", label: "Difficile", color: "bg-red-600" }
  ]

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-200 text-center mb-4">Quiz de Logique</h1>
        
        {/* Affichage du nombre total de questions */}
        <div className="text-center mb-6 p-3 bg-gray-700 rounded-lg">
          <div className="text-sm text-gray-300 mb-1">Questions disponibles</div>
          <div className="text-xl font-bold text-indigo-400">
            {selectionMode === "random" ? (
              <span>{questionsCount.total} au total</span>
            ) : (
              <span>{availableQuestions} en {difficulties.find(d => d.value === selectedDifficulty)?.label}</span>
            )}
          </div>
          {selectionMode === "random" && (
            <div className="text-xs text-gray-400 mt-1">
              Cours: {questionsCount.byDifficulty.cours} | Facile: {questionsCount.byDifficulty.facile} | 
              Moyen: {questionsCount.byDifficulty.moyen} | Dur: {questionsCount.byDifficulty.dur}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Mode de sélection */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Mode de sélection des questions
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="selectionMode"
                  value="random"
                  checked={selectionMode === "random"}
                  onChange={(e) => setSelectionMode(e.target.value as SelectionMode)}
                  className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-600 focus:ring-indigo-500 focus:ring-2"
                />
                <span className="ml-2 text-gray-300">Aléatoire pur (toutes difficultés mélangées)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="selectionMode"
                  value="difficulty"
                  checked={selectionMode === "difficulty"}
                  onChange={(e) => setSelectionMode(e.target.value as SelectionMode)}
                  className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-600 focus:ring-indigo-500 focus:ring-2"
                />
                <span className="ml-2 text-gray-300">Par difficulté</span>
              </label>
            </div>
          </div>

          {/* Sélection de difficulté (si mode difficulté activé) */}
          {selectionMode === "difficulty" && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Niveau de difficulté
              </label>
              <div className="grid grid-cols-2 gap-2">
                {difficulties.map((diff) => (
                  <button
                    key={diff.value}
                    type="button"
                    onClick={() => setSelectedDifficulty(diff.value)}
                    className={`py-2 px-3 text-sm rounded-md transition-colors duration-200 flex items-center justify-center ${
                      selectedDifficulty === diff.value 
                        ? `${diff.color} text-white` 
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    <span>{diff.label}</span>
                    <span className="ml-1 text-xs opacity-75">({questionsCount.byDifficulty[diff.value]})</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <label htmlFor="numQuestions" className="block text-sm font-medium text-gray-300 mb-4">
              Nombre de questions : <span className="text-indigo-400 font-bold">{numQuestions}</span>
              {availableQuestions < 50 && (
                <span className="text-yellow-400 text-xs ml-2">(max {availableQuestions} disponibles)</span>
              )}
            </label>

            {questionOptions.length > 1 && (
              <>
                <div className="relative">
                  <input
                    type="range"
                    id="numQuestions"
                    name="numQuestions"
                    min="0"
                    max={questionOptions.length - 1}
                    value={questionOptions.indexOf(numQuestions)}
                    onChange={(e) => setNumQuestions(questionOptions[Number.parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${(questionOptions.indexOf(numQuestions) / (questionOptions.length - 1)) * 100}%, #374151 ${(questionOptions.indexOf(numQuestions) / (questionOptions.length - 1)) * 100}%, #374151 100%)`,
                    }}
                  />

                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>{questionOptions[0]}</span>
                    {questionOptions.length > 2 && <span>{questionOptions[Math.floor(questionOptions.length / 2)]}</span>}
                    <span>{questionOptions[questionOptions.length - 1]}</span>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-2 mt-4">
                  {questionOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setNumQuestions(option)}
                      className={`py-2 px-3 text-sm rounded-md transition-colors duration-200 ${
                        numQuestions === option ? "bg-indigo-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            )}

            {questionOptions.length <= 1 && (
              <div className="text-center p-4 bg-gray-700 rounded-lg">
                <span className="text-gray-300">
                  {availableQuestions === 0 ? "Aucune question disponible" : `${availableQuestions} question${availableQuestions > 1 ? 's' : ''} disponible${availableQuestions > 1 ? 's' : ''}`}
                </span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={availableQuestions === 0}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            {availableQuestions === 0 ? "Aucune question disponible" : "Commencer le Quiz"}
          </button>
        </form>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
