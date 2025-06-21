"use client"

import type React from "react"
import { useState } from "react"

interface QuizConfigProps {
  onStart: (numQuestions: number) => void
}

export default function QuizConfig({ onStart }: QuizConfigProps) {
  const [numQuestions, setNumQuestions] = useState(10)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onStart(numQuestions)
  }

  const questionOptions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-200 text-center mb-8">Quiz de Logique</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="numQuestions" className="block text-sm font-medium text-gray-300 mb-4">
              Nombre de questions : <span className="text-indigo-400 font-bold">{numQuestions}</span>
            </label>

            <div className="relative">
              <input
                type="range"
                id="numQuestions"
                name="numQuestions"
                min="0"
                max={questionOptions.length - 1}
                value={questionOptions.indexOf(numQuestions)}
                onChange={(e) => setNumQuestions(questionOptions[Number.parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${(questionOptions.indexOf(numQuestions) / (questionOptions.length - 1)) * 100}%, #374151 ${(questionOptions.indexOf(numQuestions) / (questionOptions.length - 1)) * 100}%, #374151 100%)`,
                }}
              />

              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>5</span>
                <span>25</span>
                <span>50</span>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2 mt-4">
              {questionOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setNumQuestions(option)}
                  className={`py-2 px-3 text-sm rounded-md transition-colors duration-200 ${
                    numQuestions === option ? "bg-indigo-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Commencer le Quiz
          </button>
        </form>
      </div>
    </div>
  )
}
