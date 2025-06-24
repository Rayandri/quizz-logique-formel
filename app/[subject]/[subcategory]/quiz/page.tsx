"use client"

import { notFound, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import QuizSession from "@/components/QuizSession"
import PageContainer from "@/components/common/PageContainer"
import { getSubjectById } from "@/lib/subjects"

interface SubcategoryQuizPageProps {
  params: { 
    subject: string
    subcategory: string 
  }
}

export default function SubcategoryQuizPage({ params }: SubcategoryQuizPageProps) {
  const searchParams = useSearchParams()
  const [config, setConfig] = useState<any>(null)
  const subject = getSubjectById(params.subject)
  
  if (!subject) {
    notFound()
  }

  if (!subject.subcategories) {
    notFound()
  }

  const subcategory = subject.subcategories.find(sub => sub.id === params.subcategory)
  
  if (!subcategory) {
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
        title={`Quiz - ${subcategory.name}`}
        showBackButton={true}
        backHref={`/${params.subject}/${params.subcategory}`}
        backText={`← Retour à la configuration`}
      >
        <div className="text-center text-white">
          Chargement...
        </div>
      </PageContainer>
    )
  }

  return (
    <PageContainer 
      title={`Quiz - ${subcategory.name}`}
      showBackButton={true}
      backHref={`/${params.subject}/${params.subcategory}`}
      backText={`← Retour à la configuration`}
    >
      <QuizSession subject={params.subcategory as any} config={config} />
    </PageContainer>
  )
} 
