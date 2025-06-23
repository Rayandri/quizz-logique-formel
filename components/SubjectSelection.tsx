"use client"

import Link from "next/link"
import { subjects } from "@/lib/subjects"

export default function SubjectSelection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-5xl font-bold text-white mb-4">Quiz de Logique</h1>
      <p className="text-gray-300 text-xl mb-12">EPITA - Majeure LOFO</p>

      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-200 mb-8 text-center">
          Choisissez votre matière
        </h2>
        
        <div className="grid grid-cols-2 gap-6">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              href={`/${subject.id}`}
              className="aspect-square h-full flex flex-col items-center justify-center text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              }}
            >
              <div className={`w-full h-full flex flex-col items-center justify-center rounded-lg bg-gradient-to-br ${subject.color} hover:opacity-90 transition-opacity`}>
                <span className="text-6xl mb-4">{subject.icon}</span>
                <h3 className="text-xl font-semibold text-center px-4">{subject.name}</h3>
                {subject.description && (
                  <p className="text-sm text-gray-200 text-center px-4 mt-2 opacity-80">
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
