"use client"

import { notFound, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import ScoreScreen from "@/components/ScoreScreen"
import PageContainer from "@/components/common/PageContainer"
import { getSubjectById } from "@/lib/subjects"

interface ResultsPageProps {
  params: { subject: string }
}

export default function ResultsPage({ params }: ResultsPageProps) {
  const searchParams = useSearchParams()
  const [results, setResults] = useState<any>(null)
  const subject = getSubjectById(params.subject)
  
  if (!subject) {
    notFound()
  }

  useEffect(() => {
    const score = searchParams.get("score")
    const total = searchParams.get("total")
    
    if (score && total) {
      setResults({
        score: parseInt(score, 10),
        totalQuestions: parseInt(total, 10)
      })
    } else {
      notFound()
    }
  }, [searchParams])

  if (!results) {
    return (
      <PageContainer 
        title={subject.name}
        showBackButton={true}
        backHref={`/${subject.id}`}
      >
        <div className="text-center text-white">
          Chargement des résultats...
        </div>
      </PageContainer>
    )
  }

  const handleRestart = () => {
    window.location.href = `/${subject.id}`
  }

  return (
    <PageContainer 
      title={`Résultats - ${subject.name}`}
      showBackButton={true}
      backHref={`/${subject.id}`}
      backText="← Nouveau Quiz"
    >
      <ScoreScreen 
        score={results.score} 
        totalQuestions={results.totalQuestions} 
        onRestart={handleRestart} 
      />
    </PageContainer>
  )
} 
