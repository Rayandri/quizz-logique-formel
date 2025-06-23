"use client"

import { notFound, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import QuizSession from "@/components/QuizSession"
import PageContainer from "@/components/common/PageContainer"
import { getSubjectById } from "@/lib/subjects"

interface QuizPageProps {
  params: { subject: string }
}

export default function QuizPage({ params }: QuizPageProps) {
  const searchParams = useSearchParams()
  const [config, setConfig] = useState<any>(null)
  const subject = getSubjectById(params.subject)
  
  if (!subject) {
    notFound()
  }

  useEffect(() => {
    const configParam = searchParams.get("config")
    if (configParam) {
      try {
        const parsedConfig = JSON.parse(decodeURIComponent(configParam))
        setConfig(parsedConfig)
      } catch (error) {
        console.error("Error parsing config:", error)
        notFound()
      }
    } else {
      notFound()
    }
  }, [searchParams])

  if (!config) {
    return (
      <PageContainer 
        title={subject.name}
        showBackButton={true}
        backHref={`/${subject.id}`}
      >
        <div className="text-center text-white">
          Chargement...
        </div>
      </PageContainer>
    )
  }

  return (
    <PageContainer 
      title={subject.name}
      showBackButton={true}
      backHref={`/${subject.id}`}
      backText="← Configuration"
    >
      <QuizSession subject={params.subject as any} config={config} />
    </PageContainer>
  )
} 
