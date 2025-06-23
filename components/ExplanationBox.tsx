"use client"

import { QCM } from "@/lib/questions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, SkipForward, ArrowRight } from "lucide-react"
import { useMemo } from "react"
import KatexRenderer from "./KatexRenderer"
import SimpleTextRenderer from "./SimpleTextRenderer"

interface ExplanationBoxProps {
  question: QCM
  selectedAnswer: number | string | null
  onNext: () => void
  onReturnToMenu: () => void
  isLastQuestion: boolean
  skippedQuestion?: boolean
  subject?: string
}

export default function ExplanationBox({
  question,
  selectedAnswer,
  onNext,
  onReturnToMenu,
  isLastQuestion,
  skippedQuestion,
  subject = "logique",
}: ExplanationBoxProps) {
  
  const needsLatex = subject === "logique" || subject === "probabilites"
  const TextRenderer = needsLatex ? KatexRenderer : SimpleTextRenderer
  
  const processedExplanation = useMemo(() => {
    return question.explanation
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-100">$1</strong>')
      .replace(/\n\n/g, '</p><p class="mt-3">')
      .replace(/\n/g, '<br/>')
      .replace(/•/g, '<span class="text-indigo-400">•</span>')
  }, [question.explanation])

  const isCorrect = question.answerType === 'numeric' 
    ? selectedAnswer?.toString() === question.answer?.toString()
    : selectedAnswer === question.answer

  const isSkipped = skippedQuestion || selectedAnswer === null

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gray-900 border-gray-700">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          {isSkipped ? (
            <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center">
              <SkipForward className="h-8 w-8 text-yellow-400" />
            </div>
          ) : isCorrect ? (
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
              <XCircle className="h-8 w-8 text-red-400" />
            </div>
          )}
        </div>
        
        <CardTitle className={`text-2xl font-bold ${
          isSkipped ? 'text-yellow-400' : isCorrect ? 'text-green-400' : 'text-red-400'
        }`}>
          {isSkipped ? 'Question ignorée' : isCorrect ? 'Correct' : 'Incorrect'}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {!isSkipped && (
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h3 className="font-semibold text-gray-200 mb-2">
                <TextRenderer>{question.question}</TextRenderer>
              </h3>
              
              <div className="space-y-2">
                <div className="text-sm text-gray-400">Votre réponse :</div>
                <div className={`font-medium ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {question.answerType === 'numeric' 
                    ? selectedAnswer 
                    : <TextRenderer>{question.options[selectedAnswer as number]}</TextRenderer>
                  }
                </div>
                
                {!isCorrect && (
                  <>
                    <div className="text-sm text-gray-400 mt-3">Bonne réponse :</div>
                    <div className="text-green-400 font-medium">
                      {question.answerType === 'numeric' 
                        ? question.answer 
                        : <TextRenderer>{question.options[question.answer as number]}</TextRenderer>
                      }
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="bg-blue-900/20 border border-blue-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Explication :</h3>
          <div 
            className="text-gray-300 leading-relaxed prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: `<p>${processedExplanation}</p>` }}
          />
        </div>

        <div className="flex justify-center pt-4">
          <Button
            onClick={isLastQuestion ? onReturnToMenu : onNext}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            {isLastQuestion ? (
              <>
                Retour au menu
                <ArrowRight className="h-4 w-4 ml-2" />
              </>
            ) : (
              <>
                Question suivante
                <ArrowRight className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
