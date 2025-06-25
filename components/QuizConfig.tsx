"use client"

import { useState, useMemo, useEffect } from "react"
import { useRouter } from "next/navigation"
import { QUESTIONS, type DifficultyLevel } from "@/lib/questions"
import { COPYRIGHT_QUESTIONS } from "@/lib/copyright-questions"
import { APPLIED_COPYRIGHT_QUESTIONS } from "@/lib/applied-copyright-questions"
import { DATA_ENGINEERING_QUESTIONS } from "@/lib/data-engineering-questions"
import { RISK_MANAGEMENT_QUESTIONS } from "@/lib/risk-management-questions"
import { PROBABILITY_QUESTIONS } from "@/lib/probability-questions"
import { getSubjectName } from "@/lib/subjects"

type SelectionMode = "random" | "difficulty" | "multi-difficulty"

interface QuizConfigProps {
  subject: "logique" | "droit" | "droit-base" | "droit-applique" | "data-ing" | "risques" | "probabilites"
}

export default function QuizConfig({ subject }: QuizConfigProps) {
  const router = useRouter()
  const [numQuestions, setNumQuestions] = useState(10)
  const [selectionMode, setSelectionMode] = useState<SelectionMode>("random")
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>("facile")
  const [selectedDifficulties, setSelectedDifficulties] = useState<DifficultyLevel[]>(["facile", "moyen"])
  const [hasSavedQuiz, setHasSavedQuiz] = useState(false)

  const STORAGE_KEY = `quiz-${subject}-state`

  const currentQuestions = useMemo(() => {
    switch(subject) {
      case "droit":
        return COPYRIGHT_QUESTIONS
      case "droit-base":
        return COPYRIGHT_QUESTIONS
      case "droit-applique":
        return APPLIED_COPYRIGHT_QUESTIONS
      case "data-ing":
        return DATA_ENGINEERING_QUESTIONS
      case "risques":
        return RISK_MANAGEMENT_QUESTIONS
      case "probabilites":
        return PROBABILITY_QUESTIONS
      default:
        return QUESTIONS.filter(q => q.id < 5000)
    }
  }, [subject])

  const getQuizPath = () => {
    if (subject === "droit-base" || subject === "droit-applique") {
      return `/droit/${subject}/quiz`
    }
    return `/${subject}/quiz`
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY)
      setHasSavedQuiz(!!saved)
    }
  }, [])

  const clearSavedState = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY)
      setHasSavedQuiz(false)
    }
  }

  const questionsCount = useMemo(() => {
    const total = currentQuestions.length
    const byDifficulty = {
      cours: currentQuestions.filter(q => q.difficulty === "cours").length,
      facile: currentQuestions.filter(q => q.difficulty === "facile").length,
      moyen: currentQuestions.filter(q => q.difficulty === "moyen").length,
      dur: currentQuestions.filter(q => q.difficulty === "dur").length,
    }
    return { total, byDifficulty }
  }, [currentQuestions])

  const availableQuestions = useMemo(() => {
    if (selectionMode === "random") {
      return questionsCount.total
    } else if (selectionMode === "difficulty") {
      return questionsCount.byDifficulty[selectedDifficulty]
    } else if (selectionMode === "multi-difficulty") {
      return selectedDifficulties.reduce((total, diff) => total + questionsCount.byDifficulty[diff], 0)
    }
    return questionsCount.total
  }, [selectionMode, selectedDifficulty, selectedDifficulties, questionsCount])

  const maxSelectableQuestions = Math.min(50, availableQuestions)
  const questionOptions = useMemo(() => {
    const options = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    return options.filter(option => option <= maxSelectableQuestions)
  }, [maxSelectableQuestions])

  useMemo(() => {
    if (numQuestions > maxSelectableQuestions) {
      setNumQuestions(Math.min(questionOptions[questionOptions.length - 1] || 5, maxSelectableQuestions))
    }
  }, [numQuestions, maxSelectableQuestions, questionOptions])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    clearSavedState()
    
    const config = {
      numQuestions,
      mode: selectionMode,
      ...(selectionMode === "difficulty" && { difficulty: selectedDifficulty }),
      ...(selectionMode === "multi-difficulty" && { difficulties: selectedDifficulties })
    }
    
    const configParam = encodeURIComponent(JSON.stringify(config))
    router.push(`${getQuizPath()}?config=${configParam}`)
  }

  const toggleDifficulty = (difficulty: DifficultyLevel) => {
    setSelectedDifficulties(prev => {
      if (prev.includes(difficulty)) {
        if (prev.length === 1) return prev
        return prev.filter(d => d !== difficulty)
      } else {
        return [...prev, difficulty]
      }
    })
  }

  const difficulties: { value: DifficultyLevel; label: string; color: string }[] = [
    { value: "cours", label: "Cours", color: "bg-blue-600" },
    { value: "facile", label: "Facile", color: "bg-green-600" },
    { value: "moyen", label: "Moyen", color: "bg-yellow-600" },
    { value: "dur", label: "Difficile", color: "bg-red-600" }
  ]

  const getDisplayText = () => {
    if (selectionMode === "random") {
      return `${questionsCount.total} au total`
    } else if (selectionMode === "difficulty") {
      return `${availableQuestions} en ${difficulties.find(d => d.value === selectedDifficulty)?.label}`
    } else if (selectionMode === "multi-difficulty") {
      const labels = selectedDifficulties.map(d => difficulties.find(diff => diff.value === d)?.label).join(", ")
      return `${availableQuestions} en ${labels}`
    }
    return `${questionsCount.total} au total`
  }

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md">
      
      {hasSavedQuiz && (
        <div className="mb-4 p-3 bg-blue-900/20 border border-blue-500 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="text-sm text-blue-300">
              📋 Quiz en cours sauvegardé
            </div>
            <button
              onClick={clearSavedState}
              className="px-2 py-1 bg-red-600 hover:bg-red-500 text-white text-xs rounded transition-colors duration-200"
            >
              Effacer
            </button>
          </div>
          <div className="text-xs text-blue-400 mt-1">
            Actualisez la page pour reprendre où vous étiez
          </div>
        </div>
      )}
      
      <div className="text-center mb-6 p-3 bg-gray-700 rounded-lg">
        <div className="text-sm text-gray-300 mb-1">Questions disponibles</div>
        <div className="text-xl font-bold text-indigo-400">
          <span>{getDisplayText()}</span>
        </div>
        {selectionMode === "random" && (
          <div className="text-xs text-gray-400 mt-1">
            Cours: {questionsCount.byDifficulty.cours} | Facile: {questionsCount.byDifficulty.facile} | 
            Moyen: {questionsCount.byDifficulty.moyen} | Dur: {questionsCount.byDifficulty.dur}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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
              <span className="ml-2 text-gray-300">Une seule difficulté</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="selectionMode"
                value="multi-difficulty"
                checked={selectionMode === "multi-difficulty"}
                onChange={(e) => setSelectionMode(e.target.value as SelectionMode)}
                className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-600 focus:ring-indigo-500 focus:ring-2"
              />
              <span className="ml-2 text-gray-300">Plusieurs difficultés</span>
            </label>
          </div>
        </div>

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

        {selectionMode === "multi-difficulty" && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Niveaux de difficulté <span className="text-xs text-gray-400">(sélection multiple)</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {difficulties.map((diff) => (
                <button
                  key={diff.value}
                  type="button"
                  onClick={() => toggleDifficulty(diff.value)}
                  className={`py-2 px-3 text-sm rounded-md transition-colors duration-200 flex items-center justify-center border-2 ${
                    selectedDifficulties.includes(diff.value)
                      ? `${diff.color} text-white border-transparent` 
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600 hover:border-gray-500"
                  }`}
                >
                  <span>{diff.label}</span>
                  <span className="ml-1 text-xs opacity-75">({questionsCount.byDifficulty[diff.value]})</span>
                  {selectedDifficulties.includes(diff.value) && (
                    <span className="ml-1 text-xs">✓</span>
                  )}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">
              {selectedDifficulties.length} difficulté{selectedDifficulties.length > 1 ? 's' : ''} sélectionnée{selectedDifficulties.length > 1 ? 's' : ''}
            </p>
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
  )
}
