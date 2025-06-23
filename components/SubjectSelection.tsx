"use client"

import Link from "next/link"
import { subjects } from "@/lib/subjects"

export default function SubjectSelection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-5xl font-bold text-white mb-4">Quiz de Logique</h1>
      <p className="text-gray-300 text-xl mb-12">EPITA - Majeure LOFO</p>

      <div className="w-full max-w-lg">
        <h2 className="text-xl font-semibold text-gray-200 mb-6 text-center">
          Choisissez votre matière
        </h2>
        
        <div className="grid grid-cols-2 gap-3">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              href={`/${subject.id}`}
              className="aspect-square flex flex-col items-center justify-center text-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className={`w-full h-full flex flex-col items-center justify-center rounded-lg bg-gradient-to-br ${subject.color} hover:opacity-90 transition-opacity p-3`}>
                <span className="text-3xl mb-2">{subject.icon}</span>
                <h3 className="text-base font-semibold text-center leading-tight">{subject.name}</h3>
                {subject.description && (
                  <p className="text-xs text-gray-200 text-center mt-1 opacity-75 leading-tight">
                    {subject.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 
