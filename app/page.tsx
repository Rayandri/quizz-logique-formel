"use client"

import { useState, useEffect } from "react"
import { QUESTIONS, type QCM, type DifficultyLevel } from "@/lib/questions"
import { COPYRIGHT_QUESTIONS } from "@/lib/copyright-questions"
import { RISK_MANAGEMENT_QUESTIONS } from "@/lib/risk-management-questions"
import { PROBABILITY_QUESTIONS } from "@/lib/probability-questions"
import SubjectSelection from "@/components/SubjectSelection"
import QuizConfig from "@/components/QuizConfig"
import QuestionCard from "@/components/QuestionCard"
import ExplanationBox from "@/components/ExplanationBox"
import ScoreScreen from "@/components/ScoreScreen"
import { DeductionRules } from "@/components/DeductionRules"
import { LambdaTypingRules } from "@/components/LambdaTypingRules"

type GameState = "subject-selection" | "config" | "question" | "explanation" | "score"
type SelectionMode = "random" | "difficulty" | "multi-difficulty"
type Subject = "logique" | "droit" | "risques" | "probabilites"

interface QuizState {
  gameState: GameState
  subject: Subject
  selectedQuestions: QCM[]
  currentQuestionIndex: number
  selectedAnswer: number | string | null
  isValidated: boolean
  score: number
  currentScore: number
  skippedQuestion: boolean
}

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("subject-selection")
  const [subject, setSubject] = useState<Subject>("logique")
  const [selectedQuestions, setSelectedQuestions] = useState<QCM[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | string | null>(null)
  const [isValidated, setIsValidated] = useState(false)
  const [score, setScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [skippedQuestion, setSkippedQuestion] = useState(false)

  // Clé pour le localStorage
  const STORAGE_KEY = `quiz-${subject}-state`

  // Sauvegarder l'état dans localStorage
  const saveState = () => {
    if (typeof window !== "undefined" && gameState !== "subject-selection" && gameState !== "config") {
      const state: QuizState = {
        gameState,
        subject,
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
        // Try to load logique first, then droit, then risques
        const logiqueState = localStorage.getItem("quiz-logique-state")
        const droitState = localStorage.getItem("quiz-droit-state")
        const risquesState = localStorage.getItem("quiz-risques-state")
        const probabilitesState = localStorage.getItem("quiz-probabilites-state")
        
        if (logiqueState) {
          const state: QuizState = JSON.parse(logiqueState)
          setSubject("logique")
          setGameState(state.gameState)
          setSelectedQuestions(state.selectedQuestions)
          setCurrentQuestionIndex(state.currentQuestionIndex)
          setSelectedAnswer(state.selectedAnswer)
          setIsValidated(state.isValidated)
          setScore(state.score)
          setCurrentScore(state.currentScore)
          setSkippedQuestion(state.skippedQuestion)
          return true
        } else if (droitState) {
          const state: QuizState = JSON.parse(droitState)
          setSubject("droit")
          setGameState(state.gameState)
          setSelectedQuestions(state.selectedQuestions)
          setCurrentQuestionIndex(state.currentQuestionIndex)
          setSelectedAnswer(state.selectedAnswer)
          setIsValidated(state.isValidated)
          setScore(state.score)
          setCurrentScore(state.currentScore)
          setSkippedQuestion(state.skippedQuestion)
          return true
        } else if (risquesState) {
          const state: QuizState = JSON.parse(risquesState)
          setSubject("risques")
          setGameState(state.gameState)
          setSelectedQuestions(state.selectedQuestions)
          setCurrentQuestionIndex(state.currentQuestionIndex)
          setSelectedAnswer(state.selectedAnswer)
          setIsValidated(state.isValidated)
          setScore(state.score)
          setCurrentScore(state.currentScore)
          setSkippedQuestion(state.skippedQuestion)
          return true
        } else if (probabilitesState) {
          const state: QuizState = JSON.parse(probabilitesState)
          setSubject("probabilites")
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
        localStorage.removeItem("quiz-logique-state")
        localStorage.removeItem("quiz-droit-state")
        localStorage.removeItem("quiz-risques-state")
        localStorage.removeItem("quiz-probabilites-state")
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
  }, [gameState, subject, selectedQuestions, currentQuestionIndex, selectedAnswer, isValidated, score, currentScore, skippedQuestion])

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

  const handleSubjectSelect = (selectedSubject: Subject) => {
    setSubject(selectedSubject)
    setGameState("config")
  }

  const handleStart = (numQuestions: number, mode: SelectionMode, difficulty?: DifficultyLevel, difficulties?: DifficultyLevel[]) => {
    // Get questions based on subject
    const currentQuestions = subject === "droit" ? COPYRIGHT_QUESTIONS : 
                            subject === "risques" ? RISK_MANAGEMENT_QUESTIONS :
                            subject === "probabilites" ? PROBABILITY_QUESTIONS :
                            QUESTIONS.filter(q => q.id < 5000)
    
    let questionsPool = currentQuestions

    if (mode === "difficulty" && difficulty) {
      questionsPool = currentQuestions.filter(q => q.difficulty === difficulty)
    } else if (mode === "multi-difficulty" && difficulties && difficulties.length > 0) {
      questionsPool = currentQuestions.filter(q => difficulties.includes(q.difficulty!))
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
    setGameState("subject-selection")
    setSelectedQuestions([])
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setIsValidated(false)
    setScore(0)
    setCurrentScore(0)
    setSkippedQuestion(false)
  }

  const handleReturnToMenu = () => {
    if (confirm("Êtes-vous sûr de vouloir retourner au menu ? Votre progression sera sauvegardée.")) {
      setGameState("config")
    }
  }

  const handleBackToSubjects = () => {
    setGameState("subject-selection")
  }

  if (gameState === "subject-selection") {
    return <SubjectSelection onSelectSubject={handleSubjectSelect} />
  }

  if (gameState === "config") {
    return <QuizConfig subject={subject} onStart={handleStart} onBackToSubjects={handleBackToSubjects} />
  }

  if (gameState === "question") {
    const currentQuestion = selectedQuestions[currentQuestionIndex]
    const isDeductionQuestion = subject === "logique" && currentQuestion.id > 1000 && currentQuestion.id < 2000
    const isLambdaQuestion = subject === "logique" && currentQuestion.id >= 2000
    
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
            onReturnToMenu={handleReturnToMenu}
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
        onReturnToMenu={handleReturnToMenu}
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
