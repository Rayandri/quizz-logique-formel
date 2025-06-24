"use client"

import { notFound } from "next/navigation"
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

  return (
    <PageContainer 
      title={`Quiz - ${subcategory.name}`}
      showBackButton={true}
      backHref={`/${params.subject}/${params.subcategory}`}
      backText={`← Retour à la configuration`}
    >
      <QuizSession subject={params.subcategory as any} />
    </PageContainer>
  )
} 
