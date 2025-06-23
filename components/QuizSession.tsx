"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { QUESTIONS, type QCM, type DifficultyLevel } from "@/lib/questions"
import { COPYRIGHT_QUESTIONS } from "@/lib/copyright-questions"
import { RISK_MANAGEMENT_QUESTIONS } from "@/lib/risk-management-questions"
import { PROBABILITY_QUESTIONS } from "@/lib/probability-questions"
import QuestionCard from "./QuestionCard"
import ExplanationBox from "./ExplanationBox"
import ScoreScreen from "./ScoreScreen"
import { DeductionRules } from "./DeductionRules"
import { LambdaTypingRules } from "./LambdaTypingRules"

type GameState = "question" | "explanation" | "score"
type SelectionMode = "random" | "difficulty" | "multi-difficulty"

interface QuizConfig {
  numQuestions: number
  mode: SelectionMode
  difficulty?: DifficultyLevel
  difficulties?: DifficultyLevel[]
}

interface QuizSessionProps {
  subject: "logique" | "droit" | "risques" | "probabilites"
  config: QuizConfig
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

export default function QuizSession({ subject, config }: QuizSessionProps) {
  const router = useRouter()
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

  useEffect(() => {
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
  }, [subject, config])

  useEffect(() => {
    saveState()
  }, [gameState, selectedQuestions, currentQuestionIndex, selectedAnswer, isValidated, score, currentScore, skippedQuestion])

  const handleAnswerSelect = (answer: number | string) => {
    if (!isValidated) {
      setSelectedAnswer(answer)
    }
  }

  const handleValidate = () => {
    if (selectedAnswer !== null && selectedAnswer !== "") {
      setIsValidated(true)
      const currentQuestion = selectedQuestions[currentQuestionIndex]
      let isCorrect = false
      
      if (currentQuestion.answerType === 'numeric') {
        isCorrect = selectedAnswer?.toString() === currentQuestion.answer?.toString()
      } else {
        isCorrect = selectedAnswer === currentQuestion.answer
      }
      
      if (isCorrect) {
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
    router.push(`/${subject}`)
  }

  const handleReturnToMenu = () => {
    router.push(`/${subject}`)
  }

  if (selectedQuestions.length === 0) {
    return (
      <div className="text-center text-white">
        Préparation du quiz...
      </div>
    )
  }

  if (gameState === "question") {
    const currentQuestion = selectedQuestions[currentQuestionIndex]
    const isDeductionQuestion = subject === "logique" && currentQuestion.id > 1000 && currentQuestion.id < 2000
    const isLambdaQuestion = subject === "logique" && currentQuestion.id >= 2000
    const hasRules = isDeductionQuestion || isLambdaQuestion
    
    if (hasRules) {
      return (
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Règles de rappel - Colonne de gauche sur grands écrans */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              {isDeductionQuestion && (
                <div className="sticky top-4">
                  <DeductionRules />
                </div>
              )}
              {isLambdaQuestion && (
                <div className="sticky top-4">
                  <LambdaTypingRules />
                </div>
              )}
            </div>
            
            {/* Question principale - Colonne de droite, plus large */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <QuestionCard
                question={currentQuestion}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={selectedQuestions.length}
                selectedAnswer={selectedAnswer}
                onAnswerSelect={handleAnswerSelect}
                onValidate={handleValidate}
                onSkip={handleSkip}
                onReturnToMenu={handleReturnToMenu}
                isValidated={isValidated}
                currentScore={currentScore}
                subject={subject}
              />
            </div>
          </div>
        </div>
      )
    } else {
      // Layout centré pour les questions sans règles de rappel
      return (
        <div className="w-full max-w-4xl mx-auto">
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={selectedQuestions.length}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
            onValidate={handleValidate}
            onSkip={handleSkip}
            onReturnToMenu={handleReturnToMenu}
            isValidated={isValidated}
            currentScore={currentScore}
            subject={subject}
          />
        </div>
      )
    }
  }

  if (gameState === "explanation") {
    return (
      <ExplanationBox
        question={selectedQuestions[currentQuestionIndex]}
        selectedAnswer={selectedAnswer}
        onNext={handleNext}
        onReturnToMenu={handleReturnToMenu}
        isLastQuestion={currentQuestionIndex === selectedQuestions.length - 1}
        skippedQuestion={skippedQuestion}
        subject={subject}
      />
    )
  }

  if (gameState === "score") {
    return (
      <ScoreScreen 
        score={score} 
        totalQuestions={selectedQuestions.length} 
        onRestart={handleRestart} 
      />
    )
  }

  return null
} 
