"use client"

import { notFound } from "next/navigation"
import QuizConfig from "@/components/QuizConfig"
import PageContainer from "@/components/common/PageContainer"
import { getSubjectById } from "@/lib/subjects"

interface SubjectPageProps {
  params: { subject: string }
}

export default function SubjectPage({ params }: SubjectPageProps) {
  const subject = getSubjectById(params.subject)
  
  if (!subject) {
    notFound()
  }

  return (
    <PageContainer 
      title={subject.name}
      showBackButton={true}
      backHref="/"
      backText="← Retour aux matières"
    >
      <QuizConfig subject={params.subject as any} />
    </PageContainer>
  )
} 
