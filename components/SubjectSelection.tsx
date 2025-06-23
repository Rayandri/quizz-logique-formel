import type React from "react"
import Footer from "./Footer"

interface SubjectSelectionProps {
  onSelectSubject: (subject: "logique" | "droit" | "risques" | "probabilites") => void
}

export default function SubjectSelection({ onSelectSubject }: SubjectSelectionProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-200 text-center mb-6">
            Révision Exam - Choisissez votre matière
          </h1>
          
          <div className="space-y-4">
            <button
              onClick={() => onSelectSubject("logique")}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-6 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 group"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🧠</div>
                <div className="text-xl font-bold">Logique Formelle</div>
                <div className="text-sm opacity-90 mt-1">
                  Logique propositionnelle, déduction naturelle, λ-calcul
                </div>
              </div>
            </button>

            <button
              onClick={() => onSelectSubject("droit")}
              className="w-full bg-amber-600 hover:bg-amber-500 text-white font-medium py-6 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-800 group"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">⚖️</div>
                <div className="text-xl font-bold">Droit</div>
                <div className="text-sm opacity-90 mt-1">
                  Droit d'auteur, propriété intellectuelle, logiciel
                </div>
              </div>
            </button>

            <button
              onClick={() => onSelectSubject("risques")}
              className="w-full bg-red-600 hover:bg-red-500 text-white font-medium py-6 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 group"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <div className="text-xl font-bold">Gestion des Risques</div>
                <div className="text-sm opacity-90 mt-1">
                  ISO 27005, NIST CSF, audit, compliance, cybersécurité
                </div>
              </div>
            </button>

            <button
              onClick={() => onSelectSubject("probabilites")}
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-6 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 group"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">📊</div>
                <div className="text-xl font-bold">Probabilités & Statistiques</div>
                <div className="text-sm opacity-90 mt-1">
                  Variables aléatoires, lois de probabilité, estimation
                </div>
              </div>
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-400">
            Sélectionnez la matière pour commencer le quiz
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 
