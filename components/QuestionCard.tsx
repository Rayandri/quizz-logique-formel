"use client"

import { QCM } from "@/lib/questions"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, SkipForward } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState, useMemo } from "react"
import KatexRenderer from "./KatexRenderer"
import SimpleTextRenderer from "./SimpleTextRenderer"
import DifficultyBadge from "./DifficultyBadge"

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
  subject?: string
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
  subject = "logique",
}: QuestionCardProps) {
  const [numericAnswer, setNumericAnswer] = useState("")
  const memoizedOptions = useMemo(() => question.options, [question.id])
  
  const isNumericQuestion = question.answerType === 'numeric'
  const needsLatex = subject === "logique" || subject === "probabilites"
  const TextRenderer = needsLatex ? KatexRenderer : SimpleTextRenderer

  const progress = (questionNumber / totalQuestions) * 100

  const handleNumericSubmit = () => {
    if (numericAnswer.trim()) {
      onAnswerSelect(numericAnswer.trim())
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gray-900 border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onReturnToMenu}
            className="text-gray-400 hover:text-gray-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Menu
          </Button>
        </div>
        
        <div className="flex items-center gap-4">
          <DifficultyBadge difficulty={question.difficulty} />
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-400">
            Question {questionNumber} sur {totalQuestions}
          </span>
          <Progress value={progress} className="w-1/2" />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-100">
            <TextRenderer>{question.question}</TextRenderer>
          </h2>

          {isNumericQuestion ? (
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Entrez votre réponse numérique"
                value={numericAnswer}
                onChange={(e) => setNumericAnswer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleNumericSubmit()
                  }
                }}
                className="bg-gray-800 border-gray-600 text-gray-100"
                disabled={isValidated}
              />
              {!isValidated && (
                <Button 
                  onClick={handleNumericSubmit}
                  disabled={!numericAnswer.trim()}
                  className="w-full"
                >
                  Confirmer la réponse
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              {memoizedOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !isValidated && onAnswerSelect(index)}
                  disabled={isValidated}
                  className={`w-full p-4 text-left rounded-lg border transition-colors
                    ${selectedAnswer === index
                      ? 'border-blue-500 bg-blue-500/20 text-blue-200'
                      : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-500 hover:bg-gray-700'
                    }
                    ${isValidated ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                      ${selectedAnswer === index 
                        ? 'border-blue-500 bg-blue-500' 
                        : 'border-gray-500'
                      }`}
                    >
                      {selectedAnswer === index && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <span>
                      <TextRenderer>{option}</TextRenderer>
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="text-sm text-gray-400">
            Score actuel : {currentScore}/{questionNumber-1}
          </div>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onSkip}
              disabled={isValidated}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <SkipForward className="h-4 w-4 mr-2" />
              Passer
            </Button>
            
            <Button
              onClick={onValidate}
              disabled={isValidated || selectedAnswer === null}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Valider
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
