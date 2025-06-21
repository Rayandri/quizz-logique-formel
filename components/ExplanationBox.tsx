"use client"

import type { QCM } from "@/lib/questions"

interface ExplanationBoxProps {
  question: QCM
  selectedAnswer: number | null
  onNext: () => void
  isLastQuestion: boolean
  skippedQuestion: boolean
}

export default function ExplanationBox({
  question,
  selectedAnswer,
  onNext,
  isLastQuestion,
  skippedQuestion,
}: ExplanationBoxProps) {
  const isCorrect = selectedAnswer === question.answer

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-2xl">
        <div className="text-center mb-6">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
              skippedQuestion
                ? "bg-gray-600 text-gray-300"
                : selectedAnswer === question.answer
                  ? "bg-green-900/20 text-green-400"
                  : "bg-red-900/20 text-red-400"
            }`}
          >
            {skippedQuestion ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : selectedAnswer === question.answer ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>

          <h3
            className={`text-2xl font-bold mb-2 ${
              skippedQuestion ? "text-gray-400" : selectedAnswer === question.answer ? "text-green-400" : "text-red-400"
            }`}
          >
            {skippedQuestion ? "Question passée" : selectedAnswer === question.answer ? "Correct !" : "Incorrect"}
          </h3>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-200 mb-2">{question.question}</h4>

          <div className="space-y-2 mb-4">
            {!skippedQuestion && selectedAnswer !== null && (
              <p className="text-gray-300">
                <span className="font-medium">Votre réponse :</span>{" "}
                <span className={selectedAnswer === question.answer ? "text-green-400" : "text-red-400"}>
                  {question.options[selectedAnswer]}
                </span>
              </p>
            )}

            <p className="text-gray-300">
              <span className="font-medium">Bonne réponse :</span>{" "}
              <span className="text-green-400">{question.options[question.answer]}</span>
            </p>
          </div>
        </div>

        <div className="bg-gray-700/50 rounded-lg p-4 mb-8">
          <h5 className="font-semibold text-gray-200 mb-2">Explication :</h5>
          <div 
            className="text-gray-300 leading-relaxed prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{
              __html: question.explanation
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-100">$1</strong>')
                .replace(/\n\n/g, '</p><p class="mt-3">')
                .replace(/\n/g, '<br/>')
                .replace(/•/g, '<span class="text-indigo-400">•</span>')
            }}
          />
        </div>

        <button
          onClick={onNext}
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          {isLastQuestion ? "Voir les résultats" : "Question suivante"}
        </button>
      </div>
    </div>
  )
}
