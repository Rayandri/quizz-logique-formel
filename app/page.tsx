"use client"

import { useState, useEffect } from "react"
import { QUESTIONS, type QCM, type DifficultyLevel } from "@/lib/questions"
import QuizConfig from "@/components/QuizConfig"
import QuestionCard from "@/components/QuestionCard"
import ExplanationBox from "@/components/ExplanationBox"
import ScoreScreen from "@/components/ScoreScreen"
import { DeductionRules } from "@/components/DeductionRules"
import { LambdaTypingRules } from "@/components/LambdaTypingRules"

type GameState = "config" | "question" | "explanation" | "score"
type SelectionMode = "random" | "difficulty" | "multi-difficulty"

interface QuizState {
  gameState: GameState
  selectedQuestions: QCM[]
  currentQuestionIndex: number
  selectedAnswer: number | null
  isValidated: boolean
  score: number
  currentScore: number
  skippedQuestion: boolean
}

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("config")
  const [selectedQuestions, setSelectedQuestions] = useState<QCM[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isValidated, setIsValidated] = useState(false)
  const [score, setScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [skippedQuestion, setSkippedQuestion] = useState(false)

  // Clé pour le localStorage
  const STORAGE_KEY = "quiz-logique-state"

  // Sauvegarder l'état dans localStorage
  const saveState = () => {
    if (typeof window !== "undefined" && gameState !== "config") {
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

  // Charger l'état depuis localStorage
  const loadState = () => {
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

  // Effacer la sauvegarde
  const clearSavedState = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  useEffect(() => {
    document.documentElement.classList.add("dark")
    loadState()
  }, [])

  // Sauvegarder automatiquement à chaque changement d'état
  useEffect(() => {
    saveState()
  }, [gameState, selectedQuestions, currentQuestionIndex, selectedAnswer, isValidated, score, currentScore, skippedQuestion])

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

  const handleStart = (numQuestions: number, mode: SelectionMode, difficulty?: DifficultyLevel, difficulties?: DifficultyLevel[]) => {
    let questionsPool = QUESTIONS

    if (mode === "difficulty" && difficulty) {
      questionsPool = QUESTIONS.filter(q => q.difficulty === difficulty)
    } else if (mode === "multi-difficulty" && difficulties && difficulties.length > 0) {
      questionsPool = QUESTIONS.filter(q => difficulties.includes(q.difficulty!))
    }

    const shuffled = shuffleArray(questionsPool)
    const maxQuestions = Math.min(numQuestions, shuffled.length)
    const selected = shuffled.slice(0, maxQuestions).map(shuffleAnswers)
    
    clearSavedState()
    setSelectedQuestions(selected)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setIsValidated(false)
    setScore(0)
    setCurrentScore(0)
    setSkippedQuestion(false)
    setGameState("question")
  }

  const handleAnswerSelect = (answer: number) => {
    if (!isValidated) {
      setSelectedAnswer(answer)
    }
  }

  const handleValidate = () => {
    if (selectedAnswer !== null) {
      setIsValidated(true)
      if (selectedAnswer === selectedQuestions[currentQuestionIndex].answer) {
        const newScore = score + 1
        setScore(newScore)
        setCurrentScore(newScore)
      }
      setGameState("explanation")
    }
  }

  const handleSkip = () => {
    setSkippedQuestion(true)
    setIsValidated(true)
    setGameState("explanation")
  }

  const handleNext = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setIsValidated(false)
      setSkippedQuestion(false)
      setGameState("question")
    } else {
      setGameState("score")
    }
  }

  const handleRestart = () => {
    clearSavedState()
    setGameState("config")
    setSelectedQuestions([])
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setIsValidated(false)
    setScore(0)
    setCurrentScore(0)
    setSkippedQuestion(false)
  }

  if (gameState === "config") {
    return <QuizConfig onStart={handleStart} />
  }

  if (gameState === "question") {
    const currentQuestion = selectedQuestions[currentQuestionIndex]
    const isDeductionQuestion = currentQuestion.id > 1000 && currentQuestion.id < 2000
    const isLambdaQuestion = currentQuestion.id >= 2000
    
    return (
      <div className="min-h-screen bg-gray-900">
        <div className="max-w-4xl mx-auto p-4">
          {isDeductionQuestion && <DeductionRules />}
          {isLambdaQuestion && <LambdaTypingRules />}
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={selectedQuestions.length}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
            onValidate={handleValidate}
            onSkip={handleSkip}
            isValidated={isValidated}
            currentScore={currentScore}
          />
        </div>
      </div>
    )
  }

  if (gameState === "explanation") {
    return (
      <ExplanationBox
        question={selectedQuestions[currentQuestionIndex]}
        selectedAnswer={selectedAnswer}
        onNext={handleNext}
        isLastQuestion={currentQuestionIndex === selectedQuestions.length - 1}
        skippedQuestion={skippedQuestion}
      />
    )
  }

  if (gameState === "score") {
    return <ScoreScreen score={score} totalQuestions={selectedQuestions.length} onRestart={handleRestart} />
  }

  return null
}
