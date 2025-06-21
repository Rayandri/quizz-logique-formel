"use client"

import { useState, useEffect } from "react"
import { QUESTIONS, type QCM } from "@/lib/questions"
import QuizConfig from "@/components/QuizConfig"
import QuestionCard from "@/components/QuestionCard"
import ExplanationBox from "@/components/ExplanationBox"
import ScoreScreen from "@/components/ScoreScreen"

type GameState = "config" | "question" | "explanation" | "score"

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("config")
  const [selectedQuestions, setSelectedQuestions] = useState<QCM[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isValidated, setIsValidated] = useState(false)
  const [score, setScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [skippedQuestion, setSkippedQuestion] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

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

  const handleStart = (numQuestions: number) => {
    const shuffled = shuffleArray(QUESTIONS)
    const selected = shuffled.slice(0, numQuestions).map(shuffleAnswers)
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
    return (
      <QuestionCard
        question={selectedQuestions[currentQuestionIndex]}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={selectedQuestions.length}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
        onValidate={handleValidate}
        onSkip={handleSkip}
        isValidated={isValidated}
        currentScore={currentScore}
      />
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
