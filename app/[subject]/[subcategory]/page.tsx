"use client"

import { notFound } from "next/navigation"
import QuizConfig from "@/components/QuizConfig"
import PageContainer from "@/components/common/PageContainer"
import { getSubjectById } from "@/lib/subjects"

interface SubcategoryPageProps {
  params: { 
    subject: string
    subcategory: string 
  }
}

export default function SubcategoryPage({ params }: SubcategoryPageProps) {
  const subject = getSubjectById(params.subject)
  
  if (!subject) {
    notFound()
  }

  const subcategory = subject.subcategories?.find(sub => sub.id === params.subcategory)
  
  if (!subcategory) {
    notFound()
  }

  return (
    <PageContainer 
      title={subcategory.name}
      showBackButton={true}
      backHref={`/${params.subject}`}
      backText={`← Retour à ${subject.name}`}
    >
      <QuizConfig subject={params.subcategory as any} />
    </PageContainer>
  )
} 
