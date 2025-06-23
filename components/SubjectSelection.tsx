import type React from "react"
import Footer from "./Footer"

interface SubjectSelectionProps {
  onSelectSubject: (subject: "logique" | "droit" | "risques" | "probabilites") => void
}

export default function SubjectSelection({ onSelectSubject }: SubjectSelectionProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Menu principal toujours visible */}
      <div className="w-full bg-gray-800 shadow-lg p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-200 text-center">
            Révision Exam - Choisissez votre matière
          </h1>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-2 gap-6 mb-8">
            <button
              onClick={() => onSelectSubject("logique")}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 group aspect-square p-6"
            >
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="text-3xl mb-3">🧠</div>
                <div className="text-xl font-bold mb-2">Logique Formelle</div>
                <div className="text-sm opacity-90">
                  Logique propositionnelle, déduction naturelle, λ-calcul
                </div>
              </div>
            </button>

            <button
              onClick={() => onSelectSubject("droit")}
              className="bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-800 group aspect-square p-6"
            >
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="text-3xl mb-3">⚖️</div>
                <div className="text-xl font-bold mb-2">Droit</div>
                <div className="text-sm opacity-90">
                  Droit d'auteur, propriété intellectuelle, logiciel
                </div>
              </div>
            </button>

            <button
              onClick={() => onSelectSubject("risques")}
              className="bg-red-600 hover:bg-red-500 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 group aspect-square p-6"
            >
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="text-3xl mb-3">🛡️</div>
                <div className="text-xl font-bold mb-2">Gestion des Risques</div>
                <div className="text-sm opacity-90">
                  ISO 27005, NIST CSF, audit, compliance, cybersécurité
                </div>
              </div>
            </button>

            <button
              onClick={() => onSelectSubject("probabilites")}
              className="bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 group aspect-square p-6"
            >
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="text-3xl mb-3">📊</div>
                <div className="text-xl font-bold mb-2">Probabilités & Statistiques</div>
                <div className="text-sm opacity-90">
                  Variables aléatoires, lois de probabilité, estimation
                </div>
              </div>
            </button>
          </div>

          <div className="text-center text-sm text-gray-400">
            Sélectionnez la matière pour commencer le quiz
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 
