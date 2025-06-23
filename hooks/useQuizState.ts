"use client"

import { useState, useEffect } from "react"
import { QUESTIONS, type QCM, type DifficultyLevel } from "@/lib/questions"
import { COPYRIGHT_QUESTIONS } from "@/lib/copyright-questions"
import { RISK_MANAGEMENT_QUESTIONS } from "@/lib/risk-management-questions"
import { PROBABILITY_QUESTIONS } from "@/lib/probability-questions"

type GameState = "question" | "explanation" | "score"
type SelectionMode = "random" | "difficulty" | "multi-difficulty"

interface QuizConfig {
  numQuestions: number
  mode: SelectionMode
  difficulty?: DifficultyLevel
  difficulties?: DifficultyLevel[]
}

interface QuizState {
  gameState: GameState
  selectedQuestions: QCM[]
  currentQuestionIndex: number
  selectedAnswer: number | string | null
  isValidated: boolean
  score: number
  currentScore: number
  skippedQuestion: boolean
}

export function useQuizState(
  subject: "logique" | "droit" | "risques" | "probabilites", 
  config: QuizConfig
) {
  const [gameState, setGameState] = useState<GameState>("question")
  const [selectedQuestions, setSelectedQuestions] = useState<QCM[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | string | null>(null)
  const [isValidated, setIsValidated] = useState(false)
  const [score, setScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [skippedQuestion, setSkippedQuestion] = useState(false)

  const STORAGE_KEY = `quiz-${subject}-state`

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const shuffleAnswers = (question: QCM) => {
    const answers = [...question.options]
    const correctAnswer = question.answer
    const correctText = answers[correctAnswer]

    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[answers[i], answers[j]] = [answers[j], answers[i]]
    }

    const newCorrectIndex = answers.findIndex((answer) => answer === correctText)

    return {
      ...question,
      options: answers as [string, string, string, string],
      answer: newCorrectIndex,
    }
  }

  const saveState = () => {
    if (typeof window !== "undefined" && gameState !== "score") {
      const state: QuizState = {
        gameState,
        selectedQuestions,
        currentQuestionIndex,
        selectedAnswer,
        isValidated,
        score,
        currentScore,
        skippedQuestion
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    }
  }

  const loadState = (): boolean => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) {
          const state: QuizState = JSON.parse(saved)
          setGameState(state.gameState)
          setSelectedQuestions(state.selectedQuestions)
          setCurrentQuestionIndex(state.currentQuestionIndex)
          setSelectedAnswer(state.selectedAnswer)
          setIsValidated(state.isValidated)
          setScore(state.score)
          setCurrentScore(state.currentScore)
          setSkippedQuestion(state.skippedQuestion)
          return true
        }
      } catch (error) {
        console.error("Erreur lors du chargement de l'état:", error)
        localStorage.removeItem(STORAGE_KEY)
      }
    }
    return false
  }

  const clearSavedState = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  const initializeQuiz = () => {
    const currentQuestions = subject === "droit" ? COPYRIGHT_QUESTIONS : 
                            subject === "risques" ? RISK_MANAGEMENT_QUESTIONS :
                            subject === "probabilites" ? PROBABILITY_QUESTIONS :
                            QUESTIONS.filter(q => q.id < 5000)

    if (!loadState()) {
      let questionsPool = currentQuestions

      if (config.mode === "difficulty" && config.difficulty) {
        questionsPool = currentQuestions.filter(q => q.difficulty === config.difficulty)
      } else if (config.mode === "multi-difficulty" && config.difficulties && config.difficulties.length > 0) {
        questionsPool = currentQuestions.filter(q => config.difficulties!.includes(q.difficulty!))
      }

      const shuffled = shuffleArray(questionsPool)
      const maxQuestions = Math.min(config.numQuestions, shuffled.length)
      const selected = shuffled.slice(0, maxQuestions).map(shuffleAnswers)
      
      setSelectedQuestions(selected)
      setCurrentQuestionIndex(0)
      setSelectedAnswer(null)
      setIsValidated(false)
      setScore(0)
      setCurrentScore(0)
      setSkippedQuestion(false)
      setGameState("question")
    }
  }

  useEffect(() => {
    initializeQuiz()
  }, [subject, config])

  useEffect(() => {
    saveState()
  }, [gameState, selectedQuestions, currentQuestionIndex, selectedAnswer, isValidated, score, currentScore, skippedQuestion])

  return {
    gameState,
    setGameState,
    selectedQuestions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    selectedAnswer,
    setSelectedAnswer,
    isValidated,
    setIsValidated,
    score,
    setScore,
    currentScore,
    setCurrentScore,
    skippedQuestion,
    setSkippedQuestion,
    clearSavedState
  }
} 
