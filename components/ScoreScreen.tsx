"use client"

interface ScoreScreenProps {
  score: number
  totalQuestions: number
  onRestart: () => void
}

export default function ScoreScreen({ score, totalQuestions, onRestart }: ScoreScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100)

  const getScoreColor = () => {
    if (percentage >= 80) return "text-green-400"
    if (percentage >= 60) return "text-yellow-400"
    return "text-red-400"
  }

  const getScoreMessage = () => {
    if (percentage >= 90) return "Excellent ! Vous maîtrisez parfaitement la logique."
    if (percentage >= 80) return "Très bien ! Vous avez de solides connaissances."
    if (percentage >= 70) return "Bien ! Quelques révisions vous permettront de progresser."
    if (percentage >= 60) return "Correct. Il y a encore du travail à faire."
    if (percentage >= 50) return "Passable. Vous devriez revoir les bases."
    return "Insuffisant. Il faut reprendre les fondamentaux."
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-200 mb-8">Résultats du Quiz</h1>

        <div className="mb-8">
          <div className={`text-6xl font-bold mb-4 ${getScoreColor()}`}>{percentage}%</div>

          <div className="text-xl text-gray-300 mb-2">
            <span className={getScoreColor()}>{score}</span> / {totalQuestions} correctes
          </div>

          <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
            <div
              className={`h-3 rounded-full transition-all duration-1000 ${
                percentage >= 80 ? "bg-green-500" : percentage >= 60 ? "bg-yellow-500" : "bg-red-500"
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>

          <p className="text-gray-300 leading-relaxed">{getScoreMessage()}</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={onRestart}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Nouveau Quiz
          </button>

          <button
            onClick={onRestart}
            className="w-full bg-gray-600 hover:bg-gray-500 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Recommencer ce Quiz
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-600 text-center">
          <p className="text-xs text-gray-500 mb-2">
            ⚠️ Les questions sont générées par IA et relues rapidement - des erreurs peuvent subsister
          </p>
          <p className="text-xs text-gray-400">
            by Rayan Drissi
          </p>
        </div>
      </div>
    </div>
  )
}
