"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Subject } from "@/lib/subjects"
import Link from "next/link"

interface SubcategorySelectionProps {
  subject: Subject
}

export default function SubcategorySelection({ subject }: SubcategorySelectionProps) {
  if (!subject.subcategories || subject.subcategories.length === 0) {
    return null
  }

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Choisissez une sous-catégorie</h2>
          <p className="text-gray-400">{subject.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subject.subcategories.map((subcategory) => (
            <Link
              key={subcategory.id}
              href={`/${subject.id}/${subcategory.id}`}
              className="group block"
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-200 group-hover:scale-105 h-full">
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${subject.color} text-white text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-200`}>
                    {subject.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{subcategory.name}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {subcategory.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-sm text-gray-500">
                    Cliquez pour commencer
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 
